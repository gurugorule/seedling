# Architecture Overview

## Frontend Architecture
- Next.js 13 with App Router
- React for UI components
- Tailwind CSS for styling
- Shadcn UI component library
- JWT for authentication
- React Query for data fetching

## Backend Architecture
- Node.js with Express
- MongoDB for data storage
- JWT authentication
- WebSocket for real-time features
- Redis for caching (planned)

## Key Design Patterns
1. **Component Composition**
   - Small, reusable components
   - Clear separation of concerns
   - Props for configuration

2. **Custom Hooks**
   - Reusable logic
   - State management
   - Side effects handling

3. **Context Providers**
   - Theme management
   - Authentication state
   - Global configurations