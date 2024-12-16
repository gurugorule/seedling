"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function NavActions() {
  return (
    <div className="flex items-center space-x-4">
      <Link href="/login">
        <Button variant="ghost">Login</Button>
      </Link>
      <Link href="/signup">
        <Button>Get Started</Button>
      </Link>
      <ThemeToggle />
    </div>
  );
}