# API Reference

## Authentication
### POST /api/auth/register
Create a new user account.

```typescript
interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  plan?: string;
}
```

### POST /api/auth/login
Authenticate a user.

```typescript
interface LoginRequest {
  email: string;
  password: string;
}
```

## Projects
### GET /api/projects
Get all projects for authenticated user.

### POST /api/projects
Create a new project.

```typescript
interface CreateProjectRequest {
  title: string;
  description?: string;
}
```

## Videos
### GET /api/videos
Get all videos for authenticated user.

### POST /api/videos
Create a new video.

```typescript
interface CreateVideoRequest {
  title: string;
  description?: string;
  projectId?: string;
}
```