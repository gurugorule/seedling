"use client";

import Link from "next/link";
import { Scissors } from "lucide-react";

export function NavLogo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Scissors className="h-6 w-6 text-primary animate-pulse" />
      <span className="font-bold text-xl">Clips.ai</span>
    </Link>
  );
}