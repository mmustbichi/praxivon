
"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextType {
  openItems: string[];
  toggleItem: (value: string) => void;
  multiple?: boolean;
}

const AccordionContext = React.createContext<AccordionContextType | undefined>(undefined);

interface AccordionProps {
  children: React.ReactNode;
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  className?: string;
}

export function Accordion({ children, type = "single", defaultValue, className }: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
    return [];
  });

  const toggleItem = React.useCallback((value: string) => {
    setOpenItems((prev) => {
      if (type === "single") {
        return prev.includes(value) ? [] : [value];
      } else {
        return prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value];
      }
    });
  }, [type]);

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, multiple: type === "multiple" }}>
      <div className={cn("w-full", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export function AccordionItem({ children, value, className }: AccordionItemProps) {
  return (
    <div className={cn("border-b", className)} data-value={value}>
      {children}
    </div>
  );
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const context = React.useContext(AccordionContext);
  const itemElement = React.useRef<HTMLButtonElement>(null);

  if (!context) {
    throw new Error("AccordionTrigger must be used within an Accordion");
  }

  const value = itemElement.current?.closest("[data-value]")?.getAttribute("data-value") || "";
  const isOpen = context.openItems.includes(value);

  return (
    <button
      ref={itemElement}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      onClick={() => context.toggleItem(value)}
      data-state={isOpen ? "open" : "closed"}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </button>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

export function AccordionContent({ children, className }: AccordionContentProps) {
  const context = React.useContext(AccordionContext);
  const itemElement = React.useRef<HTMLDivElement>(null);

  if (!context) {
    throw new Error("AccordionContent must be used within an Accordion");
  }

  const value = itemElement.current?.closest("[data-value]")?.getAttribute("data-value") || "";
  const isOpen = context.openItems.includes(value);

  return (
    <div
      ref={itemElement}
      className={cn(
        "overflow-hidden text-sm transition-all",
        isOpen ? "animate-slide-in-top" : "hidden",
        className
      )}
      data-state={isOpen ? "open" : "closed"}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  );
}
