
"use client";

import Link from "next/link";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md mx-auto text-center px-6">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-primary/20 mb-4">404</div>
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-6">
            <Search className="h-16 w-16 text-muted-foreground" />
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-6">
            Oops! It looks like the page you're looking for doesn't exist. 
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          
          <Button variant="outline" asChild className="w-full">
            <Link href="/courses">
              <Search className="mr-2 h-4 w-4" />
              Browse Courses
            </Link>
          </Button>
          
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="w-full"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>

        {/* Help Section */}
        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Need Help?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            If you believe this is an error, please contact our support team.
          </p>
          <Button variant="outline" size="sm">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}
