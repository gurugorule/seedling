# Seedling - AI-Powered Video Creation Platform

![Seedling](https://images.unsplash.com/photo-1576502200916-3808e07386a5?auto=format&fit=crop&q=80&w=2070)

Seedling is a cutting-edge AI-powered video creation platform designed for content creators, marketers, and businesses. Transform your ideas into professional videos with ease using our advanced AI technology and intuitive interface.

## 🌱 Features

### Core Capabilities
- **AI Video Creation**: Transform text into professional videos
- **Style Transfer**: Apply various styles (cinematic, cartoon, etc.)
- **AI Voice Synthesis**: Generate natural voiceovers with emotion control
- **Scene Generation**: Create custom scenes with AI
- **Real-Time Preview**: See changes instantly
- **Collaboration Tools**: Work together seamlessly

### Technical Features
- Next.js 13 with App Router
- MongoDB for data storage
- JWT authentication
- Tailwind CSS for styling
- Shadcn UI components
- Dark/Light theme support
- Responsive design
- 3D card effects
- Real-time collaboration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB database
- Environment variables set up

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gurugorule/seedling.git
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```env
MONGODB_URI="your-mongodb-uri"
JWT_SECRET="your-jwt-secret"
PORT=5000
```

4. Run the development server:
```bash
npm run dev
```

## 🔒 Environment Variables

Create a `.env` file in the root directory with these variables:

- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `PORT`: Server port (default: 5000)

## 🏗️ Project Structure

```
seedling/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── features/          # Features page
│   ├── login/            # Login page
│   ├── signup/           # Signup page
│   └── pricing/          # Pricing page
├── components/            # React components
│   ├── auth/             # Authentication components
│   ├── dashboard/        # Dashboard components
│   ├── editor/           # Video editor components
│   ├── sections/         # Landing page sections
│   ├── ui/              # Reusable UI components
│   └── video/           # Video-related components
├── lib/                  # Utility functions
│   ├── hooks/           # Custom React hooks
│   └── utils/           # Helper functions
├── server/              # Backend server code
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   └── middleware/      # Custom middleware
└── public/              # Static assets
```

## 📝 Implementation Status

### Frontend ✅
- [x] Add video preview component
- [x] Implement drag-and-drop interface
- [x] Add progress indicators for video processing
- [x] Create dashboard analytics
- [x] Add export format options
- [x] Implement undo/redo functionality
- [x] Add template marketplace
- [x] Implement team permissions system
- [x] Add custom branding options
- [x] Create API documentation
- [x] Add integration with popular platforms

### Backend ✅
- [x] Set up video processing queue
- [x] Implement file upload with chunks
- [x] Add rate limiting for API endpoints
- [x] Create backup system for user data
- [x] Implement webhook system for notifications

### Performance ✅
- [x] Implement caching system
- [x] Optimize video processing
- [x] Add CDN support
- [x] Implement lazy loading for video assets
- [x] Add performance monitoring

### Security ✅
- [x] Add 2FA authentication
- [x] Implement API key system
- [x] Add content encryption
- [x] Set up security headers
- [x] Add rate limiting for auth endpoints

## 🤝 Contributing

Contributions are welcome!