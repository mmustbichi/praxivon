
"use client";

import { useState } from "react";
import { Moon, Sun, Search, Bell, User, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useSession } from "@/contexts/session-provider";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

export function Header({ onMenuToggle, isMenuOpen }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const { user } = useSession();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuToggle}
            className="md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold">Praxivon</h1>
              <p className="text-xs text-muted-foreground">Practice your tech destiny</p>
            </div>
          </div>
        </div>

        {/* Center section - Search */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search courses, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-muted rounded-lg border-0 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {user && (
            <>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </>
          )}

          {!user && (
            <div className="hidden sm:flex space-x-2">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <Button size="sm">
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
