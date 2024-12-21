"use client";

import { Card } from "@/components/ui/card";

export default function InstallationPage() {
  return (
    <Card className="p-6 prose prose-neutral dark:prose-invert max-w-none">
      <h1>Installation Guide</h1>

      <h2>System Requirements</h2>
      <ul>
        <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
        <li>Stable internet connection</li>
        <li>Minimum 4GB RAM recommended</li>
      </ul>

      <h2>Browser Setup</h2>
      <ol>
        <li>Enable JavaScript</li>
        <li>Allow browser notifications (optional)</li>
        <li>Enable local storage</li>
      </ol>

      <h2>Desktop App (Coming Soon)</h2>
      <p>Our desktop application will provide additional features:</p>
      <ul>
        <li>Offline editing</li>
        <li>Faster rendering</li>
        <li>Local file management</li>
        <li>Advanced export options</li>
      </ul>

      <h2>Mobile Apps</h2>
      <p>Download our mobile apps from:</p>
      <ul>
        <li>iOS App Store (Coming Soon)</li>
        <li>Google Play Store (Coming Soon)</li>
      </ul>

      <h2>API Access</h2>
      <p>For developers wanting to integrate with Clips.ai:</p>
      <ol>
        <li>Register for an API key</li>
        <li>Review our API documentation</li>
        <li>Join our developer community</li>
      </ol>
    </Card>
  );
}