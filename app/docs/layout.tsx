"use client";

import { Navbar } from "@/components/navbar";
import { DocsSidebar } from "@/components/docs/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <DocsSidebar />
          <main className="md:col-span-3">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}