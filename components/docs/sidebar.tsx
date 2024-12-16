"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Book, Code, Cpu, FileText, Settings } from "lucide-react";

const sections = [
  {
    title: "Getting Started",
    links: [
      { href: "/docs", icon: Book, label: "Introduction" },
      { href: "/docs/installation", icon: Settings, label: "Installation" },
      { href: "/docs/quickstart", icon: Cpu, label: "Quick Start" },
    ]
  },
  {
    title: "Architecture",
    links: [
      { href: "/docs/architecture", icon: FileText, label: "Overview" },
      { href: "/docs/frontend", icon: Code, label: "Frontend" },
      { href: "/docs/backend", icon: Cpu, label: "Backend" },
    ]
  },
  {
    title: "API Reference",
    links: [
      { href: "/docs/api/auth", icon: FileText, label: "Authentication" },
      { href: "/docs/api/projects", icon: FileText, label: "Projects" },
      { href: "/docs/api/videos", icon: FileText, label: "Videos" },
    ]
  },
  {
    title: "Contributing",
    links: [
      { href: "/docs/contributing", icon: Book, label: "Guidelines" },
      { href: "/docs/code-of-conduct", icon: FileText, label: "Code of Conduct" },
    ]
  }
];

export function DocsSidebar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string[]>([]);

  return (
    <nav className="space-y-6">
      {sections.map((section) => (
        <div key={section.title}>
          <h2 className="font-semibold mb-2">{section.title}</h2>
          <ul className="space-y-1">
            {section.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors",
                    pathname === link.href && "bg-primary text-primary-foreground"
                  )}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}