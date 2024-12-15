"use client";

import { SignupForm } from "@/components/auth/signup-form";
import { useSearchParams } from "next/navigation";

export default function SignupPage() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");

  return (
    <div className="min-h-screen bg-muted/50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <SignupForm selectedPlan={plan} />
      </div>
    </div>
  );
}