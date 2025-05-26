
"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export function Modal({ open, onOpenChange, children }: ModalProps) {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onOpenChange(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/50 animate-fade-in"
        onClick={() => onOpenChange(false)}
      />
      <div className="relative bg-background rounded-lg shadow-lg animate-slide-in-bottom max-w-lg w-full mx-4 max-h-[90vh] overflow-auto">
        {children}
      </div>
    </div>
  );
}

interface ModalContentProps {
  children: React.ReactNode;
  className?: string;
}

export function ModalContent({ children, className }: ModalContentProps) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

interface ModalHeaderProps {
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

export function ModalHeader({ children, className, onClose }: ModalHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between border-b pb-4 mb-4", className)}>
      {children}
      {onClose && (
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}

interface ModalTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function ModalTitle({ children, className }: ModalTitleProps) {
  return <h2 className={cn("text-lg font-semibold", className)}>{children}</h2>;
}

interface ModalFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function ModalFooter({ children, className }: ModalFooterProps) {
  return (
    <div className={cn("flex items-center justify-end space-x-2 border-t pt-4 mt-4", className)}>
      {children}
    </div>
  );
}
