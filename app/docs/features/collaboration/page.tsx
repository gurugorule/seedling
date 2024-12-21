"use client";

import { Card } from "@/components/ui/card";

export default function CollaborationPage() {
  return (
    <Card className="p-6 prose prose-neutral dark:prose-invert max-w-none">
      <h1>Collaboration Features</h1>

      <h2>Team Management</h2>
      <ul>
        <li>Role-based access control</li>
        <li>Team workspaces</li>
        <li>Project sharing</li>
        <li>Activity tracking</li>
      </ul>

      <h2>Real-time Collaboration</h2>
      <ul>
        <li>Simultaneous editing</li>
        <li>Comments and feedback</li>
        <li>Version history</li>
        <li>Change tracking</li>
      </ul>

      <h2>Asset Sharing</h2>
      <ul>
        <li>Shared media library</li>
        <li>Template sharing</li>
        <li>Brand asset management</li>
        <li>Access controls</li>
      </ul>

      <h2>Review Process</h2>
      <ul>
        <li>Review requests</li>
        <li>Approval workflows</li>
        <li>Feedback resolution</li>
        <li>Export permissions</li>
      </ul>
    </Card>
  );
}