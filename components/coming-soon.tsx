
"use client";

import { useState } from "react";
import { Rocket, Mail, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/contexts/toast-provider";

export function ComingSoon() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    // Simulate subscription
    setTimeout(() => {
      setIsSubscribed(true);
      toast({
        title: "Success!",
        description: "You've been added to our waitlist",
        variant: "success",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-2xl mx-auto text-center px-6">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Rocket className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold mb-2">Praxivon</h1>
          <p className="text-xl text-muted-foreground">Practice your tech destiny</p>
        </div>

        {/* Coming Soon Message */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Something Amazing is Coming</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We're building the future of tech education. A modern learning management 
            system that will revolutionize how you learn and practice technology skills.
          </p>
          
          <div className="flex items-center justify-center text-muted-foreground mb-8">
            <Clock className="h-5 w-5 mr-2" />
            <span>Expected Launch: Q2 2024</span>
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-background/50 backdrop-blur rounded-lg p-6 border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Interactive Learning</h3>
            <p className="text-sm text-muted-foreground">
              Hands-on coding exercises and real-world projects
            </p>
          </div>
          
          <div className="bg-background/50 backdrop-blur rounded-lg p-6 border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Progress Tracking</h3>
            <p className="text-sm text-muted-foreground">
              Detailed analytics and personalized learning paths
            </p>
          </div>
          
          <div className="bg-background/50 backdrop-blur rounded-lg p-6 border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Community</h3>
            <p className="text-sm text-muted-foreground">
              Connect with peers and learn together
            </p>
          </div>
        </div>

        {/* Email Subscription */}
        {!isSubscribed ? (
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4">Get Early Access</h3>
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
              <Button type="submit" size="lg">
                Notify Me
              </Button>
            </div>
          </form>
        ) : (
          <div className="max-w-md mx-auto">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">
                You're on the list!
              </h3>
              <p className="text-green-600 dark:text-green-300">
                We'll notify you when Praxivon launches. Get ready to practice your tech destiny!
              </p>
            </div>
          </div>
        )}

        <div className="mt-12 text-sm text-muted-foreground">
          <p>Follow our journey and get updates</p>
        </div>
      </div>
    </div>
  );
}
