"use client";

import { Card } from "@/components/ui/card";

export default function EditorPage() {
  return (
    <Card className="p-6 prose prose-neutral dark:prose-invert max-w-none">
      <h1>Video Editor</h1>

      <h2>Overview</h2>
      <p>
        The Clips.ai video editor is a powerful tool that combines traditional editing capabilities
        with AI-powered features to streamline your video creation process.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>Intuitive timeline interface</li>
        <li>Real-time preview</li>
        <li>Advanced trimming and splitting</li>
        <li>Multi-track editing</li>
        <li>Transitions and effects library</li>
      </ul>

      <h2>Timeline Management</h2>
      <ul>
        <li>Drag and drop clips</li>
        <li>Adjust clip duration</li>
        <li>Add transitions between clips</li>
        <li>Multiple video and audio tracks</li>
      </ul>

      <h2>Export Options</h2>
      <ul>
        <li>Multiple quality settings (up to 4K)</li>
        <li>Various format options (MP4, WebM, MOV)</li>
        <li>Custom export presets</li>
        <li>Direct social media sharing</li>
      </ul>
    </Card>
  );
}