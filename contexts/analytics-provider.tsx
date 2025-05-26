
"use client";

import React, { createContext, useContext, useCallback, useEffect } from "react";

interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
  timestamp: Date;
}

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const track = useCallback((event: string, properties?: Record<string, any>) => {
    const analyticsEvent: AnalyticsEvent = {
      event,
      properties,
      timestamp: new Date(),
    };

    // In a real app, this would send to analytics service
    console.log("Analytics Event:", analyticsEvent);
    
    // Store locally for development
    const events = JSON.parse(localStorage.getItem("analytics_events") || "[]");
    events.push(analyticsEvent);
    localStorage.setItem("analytics_events", JSON.stringify(events.slice(-100))); // Keep last 100 events
  }, []);

  const page = useCallback((name: string, properties?: Record<string, any>) => {
    track("page_view", { page: name, ...properties });
  }, [track]);

  const identify = useCallback((userId: string, traits?: Record<string, any>) => {
    track("identify", { userId, ...traits });
  }, [track]);

  useEffect(() => {
    // Track page load
    page(window.location.pathname);
  }, [page]);

  return (
    <AnalyticsContext.Provider value={{ track, page, identify }}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error("useAnalytics must be used within an AnalyticsProvider");
  }
  return context;
}
