
"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { Toast } from "@/components/ui/toast";

interface ToastItem {
  id: string;
  title?: string;
  description?: string;
  variant?: "default" | "destructive" | "success";
  duration?: number;
}

interface ToastContextType {
  toast: (toast: Omit<ToastItem, "id">) => void;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const toast = useCallback((newToast: Omit<ToastItem, "id">) => {
    const id = Math.random().toString(36).substring(2, 15);
    const toastItem: ToastItem = {
      ...newToast,
      id,
      duration: newToast.duration || 3000,
    };

    setToasts((prev) => [...prev, toastItem]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, toastItem.duration);
  }, []);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <div className="fixed bottom-0 right-0 z-50 w-full max-w-sm space-y-4 p-4">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            title={toast.title}
            description={toast.description}
            variant={toast.variant}
            onClose={() => dismiss(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
