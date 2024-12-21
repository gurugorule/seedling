"use client";

import { Card } from "@/components/ui/card";

export default function AIFeaturesPage() {
  return (
    <Card className="p-6 prose prose-neutral dark:prose-invert max-w-none">
      <h1>AI Features</h1>

      <h2>Smart Video Enhancement</h2>
      <ul>
        <li>Automatic color correction</li>
        <li>Video stabilization</li>
        <li>Noise reduction</li>
        <li>Resolution upscaling</li>
      </ul>

      <h2>AI-Powered Tools</h2>
      <ul>
        <li>Background removal</li>
        <li>Object tracking</li>
        <li>Scene detection</li>
        <li>Smart cropping</li>
      </ul>

      <h2>Voice and Audio</h2>
      <ul>
        <li>Text-to-speech generation</li>
        <li>Voice cloning</li>
        <li>Background noise removal</li>
        <li>Auto-captioning</li>
      </ul>

      <h2>Style Transfer</h2>
      <ul>
        <li>Artistic style application</li>
        <li>Color grading presets</li>
        <li>Visual effects templates</li>
        <li>Custom style training</li>
      </ul>
    </Card>
  );
}