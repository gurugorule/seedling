"use client";

import { ThreeDCard } from "@/components/ui/3d-card";
import { Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";

const pricingPlans = [
  {
    name: "Free",
    price: "0",
    color: "#00B4D8",
    features: [
      "5 video exports per month",
      "720p video quality",
      "Basic templates",
      "Essential editing tools",
      "2GB storage"
    ]
  },
  {
    name: "Pro",
    price: "20",
    color: "#4CAF50",
    features: [
      "Unlimited video exports",
      "4K video quality",
      "Premium templates",
      "Advanced AI features",
      "20GB storage",
      "Priority support"
    ]
  },
  {
    name: "Ultra",
    price: "50",
    color: "#FF9800",
    features: [
      "Everything in Pro",
      "8K video quality",
      "Custom branding",
      "API access",
      "100GB storage",
      "24/7 priority support",
      "Team collaboration"
    ]
  }
];

export function PricingSection() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false);

  const handlePlanSelection = (planName: string) => {
    setSelectedPlan(planName);
    setShowDialog(true);
  };

  const handleConfirmPlan = () => {
    setShowDialog(false);
    router.push(`/signup?plan=${selectedPlan?.toLowerCase()}`);
  };

  return (
    <section className="relative py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Choose Your Creative Journey
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Start for free, upgrade as you grow
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="flex">
              <ThreeDCard className="w-full" intensity={7}>
                <div className="h-full pricing-card p-8 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col h-full">
                    <div>
                      <h3 className="text-2xl font-bold mb-2" style={{ color: plan.color }}>{plan.name}</h3>
                      <p className="text-4xl font-bold mb-6">
                        ${plan.price}
                        <span className="text-base font-normal opacity-80">/month</span>
                      </p>
                    </div>
                    <ul className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Sparkles className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: plan.color }} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full"
                      style={{ 
                        backgroundColor: plan.color,
                        color: 'white',
                        border: 'none'
                      }}
                      onClick={() => handlePlanSelection(plan.name)}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </ThreeDCard>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Your Plan</DialogTitle>
            <DialogDescription>
              You've selected the {selectedPlan} plan. Ready to get started?
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-4">
            <Button
              variant="outline"
              onClick={() => setShowDialog(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirmPlan}
              style={{ backgroundColor: pricingPlans.find(p => p.name === selectedPlan)?.color }}
            >
              Continue
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}