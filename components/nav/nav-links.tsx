"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function NavLinks() {
  return (
    <div className="flex items-center space-x-4">
      <Link href="/pricing">
        <Button variant="ghost">Pricing</Button>
      </Link>
      <Link href="/features">
        <Button variant="ghost">Features</Button>
      </Link>
      <Link href="/docs">
        <Button variant="ghost">Documentation</Button>
      </Link>
    </div>
  );
}