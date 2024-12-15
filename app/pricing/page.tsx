"use client";

import { Navbar } from "@/components/navbar";
import { PricingSection } from "@/components/sections/pricing-section";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <PricingSection />
      </main>
    </div>
  );
}