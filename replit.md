# TryOnX - AI-Powered 3D Fashion Designer & Virtual Try-On System

## Overview

TryOnX is an AI-first fashion design platform that enables users to generate, visualize, and refine clothing designs through multiple input methods including text prompts, sketches, and reference images. The platform combines modern web technologies with AI/ML capabilities to provide real-time 3D visualization and virtual try-on experiences.

The system bridges the gap between creative fashion design and technical implementation by offering:
- AI-powered outfit generation from text descriptions
- Sketch-to-design conversion with component detection
- 3D garment visualization with physics simulation
- Interactive fabric and lighting customization
- AI fashion assistant for design consultation

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Choice: React + TypeScript + Vite**
- React 18 provides the component-based architecture and hooks for state management
- TypeScript ensures type safety and better developer experience
- Vite offers fast HMV (Hot Module Replacement) and optimized production builds
- Chosen for modern developer experience and performance

**Routing: React Router v6**
- Client-side routing for seamless navigation between pages
- Routes include: Home, Generate, Sketch, Try-On, and Chat pages
- Simple declarative routing without complex state management needs

**3D Rendering: Three.js + React Three Fiber**
- Three.js handles WebGL rendering for 3D garment visualization
- React Three Fiber provides React bindings for declarative 3D scene creation
- @react-three/drei offers helpful abstractions (OrbitControls, Environment, PerspectiveCamera)
- Chosen for robust 3D capabilities with React integration

**Animation & UI: Framer Motion + TailwindCSS**
- Framer Motion provides smooth, physics-based animations
- TailwindCSS enables rapid UI development with utility-first approach
- Custom glass morphism design inspired by Apple Vision Pro and Meta Quest VR
- Backdrop blur and gradient overlays create premium, modern aesthetic

**Design System**
- Glass panel components with backdrop blur and semi-transparent surfaces
- Floating UI elements with subtle shadows and volumetric effects
- Color scheme: Indigo/purple gradients on dark backgrounds
- Inter font family for clean, modern typography

### Backend Architecture

**Framework: FastAPI (Python)**
- Async-first web framework for high-performance API endpoints
- Automatic OpenAPI documentation (Swagger/ReDoc)
- Built-in request validation with Pydantic models
- Chosen for excellent Python ML library integration and async capabilities

**API Design: RESTful**
- Endpoints organized by feature: /api/generate, /api/sketch, /api/chat
- JSON request/response format with Pydantic validation
- CORS middleware configured for cross-origin requests from frontend
- File upload support via multipart/form-data

**CORS Configuration**
- Allow all origins for development (should be restricted in production)
- All methods and headers permitted
- Credentials support enabled

**Server Configuration**
- Uvicorn ASGI server for production deployment
- Hot reload enabled for development
- Port 8000 default (frontend expects backend at this port)

### AI/ML Pipeline (Planned/In Progress)

**Text-to-Design Generation**
- LLaMA 3 for natural language understanding of fashion prompts
- ControlNet/SDXL for guided image generation
- Negative prompts for refinement control
- Style parameters for different fashion aesthetics

**Sketch-to-Design Processing**
- YOLOv8 for component detection (sleeve, collar, hem identification)
- ControlNet for sketch refinement and style application
- Multi-level refinement options (low/medium/high)

**Fabric Processing**
- Image upload and preprocessing (PIL/OpenCV)
- Texture extraction and color analysis
- Material property inference for 3D rendering

**2D to 3D Conversion**
- Blender integration for garment mesh generation
- Kaolin (PyTorch library) for neural 3D reconstruction
- Export to GLB/FBX formats for production use

**AI Chatbot**
- LLaMA 3 fine-tuned for fashion domain
- Conversation state management
- Context-aware responses for design suggestions and technical questions

### State Management

**Client-Side State**
- React useState for local component state
- No global state management library (Redux/Zustand) - kept simple
- Form state managed locally in respective page components
- 3D scene state managed by React Three Fiber

**Server-Side State**
- Stateless API design - no session storage currently
- Conversation IDs for chat continuity
- File uploads handled transiently (not persisted to database yet)

### Build & Development

**Development Server**
- Vite dev server on port 5000 (configurable)
- Host: 0.0.0.0 for external access (Replit-friendly)
- Cache headers disabled for development
- Fast HMR for instant feedback

**Production Build**
- TypeScript compilation with strict mode
- Vite optimization (code splitting, tree shaking)
- Asset optimization and minification

**Code Quality**
- ESLint for code linting
- Prettier for code formatting
- TypeScript strict mode enabled
- No unused locals/parameters allowed

## External Dependencies

### Frontend Dependencies

**Core Libraries**
- `react` & `react-dom` (v18.2.0): UI framework
- `react-router-dom` (v6.20.0): Client-side routing
- `typescript` (v5.2.2): Type safety

**3D Rendering**
- `three` (v0.158.0): WebGL 3D library
- `@react-three/fiber` (v8.15.11): React renderer for Three.js
- `@react-three/drei` (v9.88.13): Useful helpers for R3F

**UI & Animation**
- `framer-motion` (v10.16.16): Animation library
- `lucide-react` (v0.294.0): Icon library
- `tailwindcss` (v3.3.6): Utility-first CSS framework
- `autoprefixer` & `postcss`: CSS processing

**Build Tools**
- `vite` (v5.0.8): Build tool and dev server
- `@vitejs/plugin-react` (v4.2.1): React plugin for Vite

### Backend Dependencies

**Web Framework**
- `fastapi` (v0.104.1): Modern async web framework
- `uvicorn[standard]` (v0.24.0): ASGI server
- `python-multipart` (v0.0.6): File upload support
- `pydantic` (v2.5.0): Data validation

**Utilities**
- `python-dotenv` (v1.0.0): Environment variable management
- `requests` (v2.31.0): HTTP client

**Image Processing**
- `pillow` (v10.1.0): Python imaging library
- `opencv-python` (v4.8.1.78): Computer vision library
- `numpy` (v1.26.2): Numerical computing

**AI/ML (Optional - To Be Installed)**
- PyTorch, Transformers, Diffusers: For AI model inference
- ControlNet-aux: For sketch processing
- Ultralytics (YOLOv8): For component detection
- LangChain: For chatbot conversation management
- boto3: For AWS S3 file storage (if needed)

### External Services (Configured via Environment Variables)

**AI Model APIs**
- Groq API: For LLaMA 3 inference (API_KEY_GROQ)
- Replicate API: For image generation models (API_KEY_REPLICATE)

**Cloud Storage (Optional)**
- AWS S3: For storing generated images and uploaded files
  - AWS_ACCESS_KEY_ID
  - AWS_SECRET_ACCESS_KEY

**Environment Configuration**
- Frontend: `VITE_API_URL` for backend endpoint (defaults to localhost:8000)
- Backend: `.env` file for API keys and credentials

### Browser Requirements

**WebGL Support**
- Modern browser with WebGL 2.0 support
- Hardware acceleration recommended for 3D rendering
- Minimum resolution: 320px width (mobile-friendly)

### Development Tools

- Node.js 18+ for frontend development
- Python 3.9+ for backend development
- npm/yarn/pnpm for package management
- Git for version control