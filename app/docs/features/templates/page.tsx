"use client";

import { Card } from "@/components/ui/card";

export default function TemplatesPage() {
  return (
    <Card className="p-6 prose prose-neutral dark:prose-invert max-w-none">
      <h1>Video Templates</h1>

      <h2>Template Library</h2>
      <ul>
        <li>Professional designs</li>
        <li>Industry-specific templates</li>
        <li>Customizable layouts</li>
        <li>Regular updates</li>
      </ul>

      <h2>Template Categories</h2>
      <ul>
        <li>Social Media</li>
        <li>Marketing</li>
        <li>Education</li>
        <li>Business Presentations</li>
        <li>Personal Projects</li>
      </ul>

      <h2>Customization</h2>
      <ul>
        <li>Edit text and media</li>
        <li>Adjust colors and fonts</li>
        <li>Modify animations</li>
        <li>Save custom templates</li>
      </ul>

      <h2>Template Marketplace</h2>
      <ul>
        <li>Community templates</li>
        <li>Premium designs</li>
        <li>Template sharing</li>
        <li>Rating system</li>
      </ul>
    </Card>
  );
}