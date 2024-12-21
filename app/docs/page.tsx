"use client";

import { Card } from "@/components/ui/card";

export default function DocsHomePage() {
  return (
    <Card className="p-6 prose prose-neutral dark:prose-invert max-w-none">
      <h1>Welcome to Clips.ai Documentation</h1>

      <p className="lead">
        Clips.ai is an AI-powered video creation platform that helps you create
        professional videos quickly and easily.
      </p>

      <h2>Documentation Sections</h2>
      
      <h3>Getting Started</h3>
      <ul>
        <li><a href="/docs/quickstart">Quick Start Guide</a></li>
        <li><a href="/docs/installation">Installation Guide</a></li>
        <li><a href="/docs/tutorials">Tutorials</a></li>
      </ul>

      <h3>Core Concepts</h3>
      <ul>
        <li>Video Projects</li>
        <li>AI Enhancement</li>
        <li>Templates</li>
        <li>Collaboration</li>
      </ul>

      <h3>Features</h3>
      <ul>
        <li>Video Editor</li>
        <li>Asset Management</li>
        <li>Export Options</li>
        <li>Team Management</li>
      </ul>

      <h3>API Reference</h3>
      <ul>
        <li>Authentication</li>
        <li>Projects API</li>
        <li>Videos API</li>
        <li>Assets API</li>
      </ul>

      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
        <h4 className="text-lg font-semibold">Need Help?</h4>
        <p>
          Join our community on Discord or contact our support team for assistance.
        </p>
      </div>
    </Card>
  );
}