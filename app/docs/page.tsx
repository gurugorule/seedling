"use client";

import { useState } from "react";
import { DocContent } from "@/components/docs/doc-content";
import { DocSearch } from "@/components/docs/doc-search";

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Documentation</h1>
        <DocSearch onSearch={setSearchQuery} />
      </div>
      <DocContent searchQuery={searchQuery} />
    </div>
  );
}