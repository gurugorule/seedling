"use client";

import { Card } from "@/components/ui/card";

export default function TutorialsPage() {
  return (
    <Card className="p-6 prose prose-neutral dark:prose-invert max-w-none">
      <h1>Video Creation Tutorials</h1>

      <h2>Beginner Tutorials</h2>
      <ul>
        <li>Creating Your First Video</li>
        <li>Understanding the Timeline</li>
        <li>Working with Templates</li>
        <li>Basic Video Editing</li>
      </ul>

      <h2>Advanced Tutorials</h2>
      <ul>
        <li>AI Enhancement Features</li>
        <li>Advanced Timeline Techniques</li>
        <li>Custom Effects and Transitions</li>
        <li>Color Grading</li>
      </ul>

      <h2>Professional Workflows</h2>
      <ul>
        <li>Team Collaboration</li>
        <li>Project Organization</li>
        <li>Asset Management</li>
        <li>Export Optimization</li>
      </ul>

      <div className="mt-8 bg-muted p-4 rounded-lg">
        <h3>Video Tutorial Series</h3>
        <p>Check out our comprehensive video tutorial series on our YouTube channel.</p>
      </div>
    </Card>
  );
}