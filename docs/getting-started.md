# Getting Started with Seedling

## Introduction
Seedling is an AI-powered video creation platform that enables users to create professional videos using cutting-edge AI technology. This documentation will help you understand the platform's architecture, features, and how to contribute to its development.

## Quick Start
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables
4. Run development server: `npm run dev`

## Environment Variables
```env
MONGODB_URI="your-mongodb-uri"
JWT_SECRET="your-jwt-secret"
PORT=5000
```

## Project Structure
```
seedling/
├── app/                # Next.js app directory
├── components/         # React components
├── lib/               # Utility functions
├── server/            # Backend server code
├── docs/              # Documentation
└── public/            # Static assets
```