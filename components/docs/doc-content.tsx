"use client";

import { useEffect, useState } from "react";
import { marked } from "marked";
import { Card } from "@/components/ui/card";

interface DocContentProps {
  searchQuery: string;
}

export function DocContent({ searchQuery }: DocContentProps) {
  const [content, setContent] = useState("");

  useEffect(() => {
    // In a real app, this would fetch from an API or load markdown files
    fetch("/docs/getting-started.md")
      .then(res => res.text())
      .then(text => {
        setContent(marked(text));
      });
  }, []);

  return (
    <Card className="p-6 prose prose-neutral dark:prose-invert max-w-none">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Card>
  );
}