"use client";

import { Card } from "@/components/ui/card";

export default function QuickstartPage() {
  return (
    <Card className="p-6 prose prose-neutral dark:prose-invert max-w-none">
      <h1>Quick Start Guide</h1>
      
      <h2>Getting Started with Clips.ai</h2>
      <p>Follow these steps to start creating videos with Clips.ai:</p>

      <h3>1. Create an Account</h3>
      <ul>
        <li>Sign up for a free account</li>
        <li>Verify your email (optional)</li>
        <li>Choose your subscription plan</li>
      </ul>

      <h3>2. Create Your First Project</h3>
      <ul>
        <li>Click "New Project" in the dashboard</li>
        <li>Choose a template or start from scratch</li>
        <li>Upload your media files</li>
      </ul>

      <h3>3. Edit Your Video</h3>
      <ul>
        <li>Use the drag-and-drop timeline</li>
        <li>Add transitions and effects</li>
        <li>Apply AI enhancements</li>
      </ul>

      <h3>4. Export and Share</h3>
      <ul>
        <li>Choose your export quality</li>
        <li>Select the output format</li>
        <li>Share directly to social media</li>
      </ul>

      <h2>Key Features</h2>
      <ul>
        <li>AI-powered video creation</li>
        <li>Professional templates</li>
        <li>Real-time collaboration</li>
        <li>Cloud storage</li>
        <li>Advanced editing tools</li>
      </ul>
    </Card>
  );
}