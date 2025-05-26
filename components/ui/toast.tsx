
"use client";

import * as React from "react";
import { X, CheckCircle, AlertCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToastProps {
  title?: string;
  description?: string;
  variant?: "default" | "destructive" | "success";
  onClose?: () => void;
  className?: string;
}

export function Toast({
  title,
  description,
  variant = "default",
  onClose,
  className,
}: ToastProps) {
  const icons = {
    default: null,
    success: <CheckCircle className="h-4 w-4 text-green-500" />,
    destructive: <XCircle className="h-4 w-4 text-red-500" />,
  };

  return (
    <div
      className={cn(
        "flex items-start space-x-3 p-4 rounded-lg border shadow-lg bg-background animate-slide-in-bottom",
        {
          "border-green-200 bg-green-50 dark:bg-green-900/20": variant === "success",
          "border-red-200 bg-red-50 dark:bg-red-900/20": variant === "destructive",
        },
        className
      )}
    >
      {icons[variant]}
      <div className="flex-1 min-w-0">
        {title && (
          <p className="text-sm font-medium text-foreground">{title}</p>
        )}
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
