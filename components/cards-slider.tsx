
"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
}

interface CardsSliderProps {
  title: string;
  courses: Course[];
  className?: string;
}

export function CardsSlider({ title, courses, className }: CardsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const cardWidth = 320; // Width of each card
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    
    sliderRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });

    if (direction === "left") {
      setCurrentIndex(Math.max(0, currentIndex - 1));
    } else {
      setCurrentIndex(Math.min(courses.length - 1, currentIndex + 1));
    }
  };

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < courses.length - 3;

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex-none w-80 bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-6xl opacity-20">📚</div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  {course.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {course.level}
                </span>
              </div>
              
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                {course.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {course.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {course.students.toLocaleString()}
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                  {course.rating}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  by {course.instructor}
                </span>
                <Button size="sm">
                  Enroll
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
