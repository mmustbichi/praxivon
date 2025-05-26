
"use client";

import { useState } from "react";
import { Header } from "./header";
import { Navigator } from "./navigator";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isNavigatorOpen, setIsNavigatorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header
        onMenuToggle={() => setIsNavigatorOpen(!isNavigatorOpen)}
        isMenuOpen={isNavigatorOpen}
      />
      
      <div className="flex">
        <Navigator
          isOpen={isNavigatorOpen}
          onClose={() => setIsNavigatorOpen(false)}
        />
        
        <main className="flex-1 md:ml-64">
          <div className="container mx-auto px-4 py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
