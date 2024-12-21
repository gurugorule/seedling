"use client";

import { Card } from "@/components/ui/card";

export default function AuthenticationPage() {
  return (
    <Card className="p-6 prose prose-neutral dark:prose-invert max-w-none">
      <h1>Authentication API</h1>

      <h2>Overview</h2>
      <p>
        Clips.ai uses JWT (JSON Web Tokens) for authentication. All authenticated endpoints 
        require a valid JWT token in the Authorization header.
      </p>

      <h2>Authentication Endpoints</h2>

      <h3>Register User</h3>
      <pre><code>{`POST /api/auth/register
Content-Type: application/json

{
  "name": "string",
  "email": "string",
  "password": "string",
  "plan": "string" // optional
}`}</code></pre>

      <h3>Login</h3>
      <pre><code>{`POST /api/auth/login
Content-Type: application/json

{
  "email": "string",
  "password": "string"
}`}</code></pre>

      <h2>Using Authentication</h2>
      <p>After successful authentication, include the JWT token in your API requests:</p>
      <pre><code>{`Authorization: Bearer your-jwt-token`}</code></pre>

      <h2>Security Best Practices</h2>
      <ul>
        <li>Store tokens securely</li>
        <li>Use HTTPS for all requests</li>
        <li>Implement token refresh mechanism</li>
        <li>Handle token expiration gracefully</li>
      </ul>

      <h2>Rate Limiting</h2>
      <p>Authentication endpoints are rate-limited to prevent abuse:</p>
      <ul>
        <li>Register: 5 requests per hour per IP</li>
        <li>Login: 10 requests per minute per IP</li>
      </ul>

      <h2>Error Responses</h2>
      <pre><code>{`{
  "message": "string",  // Error description
  "code": "string"      // Error code
}`}</code></pre>
    </Card>
  );
}