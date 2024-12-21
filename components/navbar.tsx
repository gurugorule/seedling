"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sprout } from "lucide-react";
import { NavLinks } from "@/components/nav/nav-links";
import { NavLogo } from "@/components/nav/nav-logo";
import { NavActions } from "@/components/nav/nav-actions";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-16 items-center justify-between">
        <NavLogo />
        <NavLinks />
        <NavActions />
      </div>
    </nav>
  );
}