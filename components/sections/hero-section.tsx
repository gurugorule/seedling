"use client";

import { AnimatedButton } from "@/components/ui/animated-button";
import { Scissors } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function HeroSection() {
  const router = useRouter();
  const [showDemo, setShowDemo] = useState(false);

  const handleGetStarted = () => {
    router.push("/signup");
  };

  return (
    <section className="pt-32 pb-20 px-4 hero-gradient">
      <div className="container mx-auto text-center">
        <div className="inline-block mb-4">
          <Scissors className="h-12 w-12 text-[#00B4D8] animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Create Stunning Videos with{" "}
          <span className="gradient-text">AI Magic</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Transform your ideas into professional videos in minutes. 
          Powered by AI, designed for creators.
        </p>
        <div className="flex justify-center gap-6">
          <AnimatedButton
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-[#00B4D8] to-[#4CAF50] hover:opacity-90 text-white"
            onClick={handleGetStarted}
          >
            Start Creating Free
          </AnimatedButton>
          <AnimatedButton
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-2 border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white transition-colors"
            onClick={() => setShowDemo(true)}
          >
            Watch Demo
          </AnimatedButton>
        </div>
      </div>

      <Dialog open={showDemo} onOpenChange={setShowDemo}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Clips.ai Demo</DialogTitle>
          </DialogHeader>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Clips.ai Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="border-0"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}