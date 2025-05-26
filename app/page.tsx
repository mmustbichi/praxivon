
"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { CardsSlider } from "@/components/cards-slider";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Users, 
  Trophy, 
  TrendingUp,
  Play,
  Calendar,
  Clock,
  Target
} from "lucide-react";

const featuredCourses = [
  {
    id: "1",
    title: "Full Stack Web Development with React & Node.js",
    description: "Learn to build modern web applications from scratch using React, Node.js, and MongoDB.",
    instructor: "Sarah Johnson",
    duration: "12 weeks",
    students: 2400,
    rating: 4.8,
    image: "/course1.jpg",
    level: "Intermediate" as const,
    category: "Web Development",
  },
  {
    id: "2",
    title: "Python for Data Science and Machine Learning",
    description: "Master Python programming and dive into data science with pandas, numpy, and scikit-learn.",
    instructor: "Dr. Michael Chen",
    duration: "10 weeks",
    students: 1800,
    rating: 4.9,
    image: "/course2.jpg",
    level: "Beginner" as const,
    category: "Data Science",
  },
  {
    id: "3",
    title: "DevOps Engineering with AWS and Docker",
    description: "Learn modern DevOps practices with containerization, CI/CD, and cloud infrastructure.",
    instructor: "Alex Rodriguez",
    duration: "8 weeks",
    students: 1200,
    rating: 4.7,
    image: "/course3.jpg",
    level: "Advanced" as const,
    category: "DevOps",
  },
  {
    id: "4",
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile applications using React Native and Expo.",
    instructor: "Lisa Park",
    duration: "6 weeks",
    students: 950,
    rating: 4.6,
    image: "/course4.jpg",
    level: "Intermediate" as const,
    category: "Mobile Development",
  },
];

const popularCourses = [
  {
    id: "5",
    title: "JavaScript Fundamentals for Beginners",
    description: "Start your programming journey with JavaScript basics and modern ES6+ features.",
    instructor: "John Doe",
    duration: "4 weeks",
    students: 3200,
    rating: 4.8,
    image: "/course5.jpg",
    level: "Beginner" as const,
    category: "Programming",
  },
  {
    id: "6",
    title: "Cybersecurity Fundamentals",
    description: "Learn the essentials of cybersecurity, network security, and ethical hacking.",
    instructor: "Emily White",
    duration: "8 weeks",
    students: 1600,
    rating: 4.7,
    image: "/course6.jpg",
    level: "Intermediate" as const,
    category: "Security",
  },
  {
    id: "7",
    title: "UI/UX Design Masterclass",
    description: "Master design principles, user research, and prototyping with industry tools.",
    instructor: "David Kim",
    duration: "10 weeks",
    students: 2100,
    rating: 4.9,
    image: "/course7.jpg",
    level: "Beginner" as const,
    category: "Design",
  },
];

const stats = [
  { icon: BookOpen, label: "Active Courses", value: "150+" },
  { icon: Users, label: "Students", value: "25K+" },
  { icon: Trophy, label: "Certificates", value: "5K+" },
  { icon: TrendingUp, label: "Success Rate", value: "94%" },
];

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-8 md:p-12">
          <div className="relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Practice Your Tech Destiny
              </h1>
              <p className="text-xl mb-6 opacity-90">
                Master cutting-edge technologies with hands-on projects, expert mentorship, 
                and a supportive community of learners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  <Play className="mr-2 h-5 w-5" />
                  Start Learning
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  Browse Courses
                </Button>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="absolute top-8 right-8 w-32 h-32 rounded-full bg-primary-foreground/20"></div>
            <div className="absolute top-24 right-24 w-16 h-16 rounded-full bg-primary-foreground/30"></div>
            <div className="absolute bottom-8 right-16 w-24 h-24 rounded-full bg-primary-foreground/20"></div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-card border rounded-lg p-6 text-center">
                <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </section>

        {/* Quick Actions */}
        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold">My Learning Path</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Continue your personalized learning journey
            </p>
            <Button variant="outline" className="w-full">
              Continue Learning
            </Button>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                <Calendar className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold">Upcoming Events</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Live sessions and webinars this week
            </p>
            <Button variant="outline" className="w-full">
              View Schedule
            </Button>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3">
                <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold">Study Streak</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Keep your learning momentum going
            </p>
            <Button variant="outline" className="w-full">
              7 Days Strong!
            </Button>
          </div>
        </section>

        {/* Course Sliders */}
        <CardsSlider 
          title="Featured Courses" 
          courses={featuredCourses}
        />
        
        <CardsSlider 
          title="Popular This Week" 
          courses={popularCourses}
        />

        {/* Call to Action */}
        <section className="bg-muted rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of learners who are already advancing their careers with Praxivon. 
            Start with our free courses and upgrade anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline">
              View All Courses
            </Button>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
