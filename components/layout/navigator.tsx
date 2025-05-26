
"use client";

import { useState, useEffect } from "react";
import {
  Home,
  BookOpen,
  Users,
  BarChart3,
  Settings,
  Award,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavigatorProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: BookOpen, label: "Courses", href: "/courses" },
  { icon: Users, label: "Community", href: "/community" },
  { icon: BarChart3, label: "Progress", href: "/progress" },
  { icon: Calendar, label: "Schedule", href: "/schedule" },
  { icon: MessageSquare, label: "Discussions", href: "/discussions" },
  { icon: Award, label: "Achievements", href: "/achievements" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Navigator({ isOpen, onClose }: NavigatorProps) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobile, isOpen]);

  const NavigationContent = () => (
    <nav className="flex-1 px-4 py-6 space-y-2">
      {navigationItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;
        
        return (
          <Link key={item.href} href={item.href} onClick={isMobile ? onClose : undefined}>
            <Button
              variant={isActive ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start h-12 px-4",
                isActive && "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              <Icon className="mr-3 h-5 w-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </Button>
          </Link>
        );
      })}
    </nav>
  );

  if (isMobile) {
    return (
      <>
        {/* Mobile Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={onClose}
          />
        )}
        
        {/* Mobile Sidebar */}
        <aside
          className={cn(
            "fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-background border-r transition-transform duration-300 ease-in-out z-50 md:hidden",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <NavigationContent />
        </aside>
      </>
    );
  }

  // Desktop sidebar
  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-16 md:border-r md:bg-background">
      <NavigationContent />
    </aside>
  );
}
