"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface DocSearchProps {
  onSearch: (query: string) => void;
}

export function DocSearch({ onSearch }: DocSearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        type="search"
        placeholder="Search documentation..."
        className="pl-10 w-[300px]"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}