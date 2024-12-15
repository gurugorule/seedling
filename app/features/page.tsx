"use client";

import { Navbar } from "@/components/navbar";
import { FeaturesSection } from "@/components/sections/features-section";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <FeaturesSection />
      </main>
    </div>
  );
}