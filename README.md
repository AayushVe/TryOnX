# TryOnX – AI-Powered 3D Fashion Designer & Virtual Try-On System

A comprehensive AI-first fashion design platform that allows users to generate, visualize, and refine clothing designs through text prompts, sketches, and reference images.

## ✨ Core Capabilities

1. **AI Prompt-Based Outfit Generation** - LLaMA 3 + ControlNet/SDXL for text-to-design
2. **Sketch-to-Design AI** - YOLOv8 component detection + ControlNet refinement
3. **Cloth Image Input** - Extract fabric texture, color, and folds
4. **2D → 3D Garment Generation** - Blender + Kaolin neural reconstructions
5. **3D Virtual Try-On** - Real-time Three.js viewer with physics simulation
6. **AI Chatbot** - Fashion-specialized LLM assistant (LLaMA 3)

## 🎨 Design Inspiration

- **Apple Vision Pro** - Floating glass panels, subtle reflections, volumetric lighting
- **Meta Quest VR** - Floating 3D objects, semi-transparent surfaces
- **Chronothreads** - Fabric showcase with macro detail and smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Python 3.9+ (for backend)
- Git

### Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
VITE_API_URL=http://localhost:8000
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser at `http://localhost:5173`

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Create virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create `.env` file (optional):
```bash
API_KEY_GROQ=your_groq_api_key
API_KEY_REPLICATE=your_replicate_api_key
```

5. Run the server:
```bash
python main.py
```

Or with uvicorn:
```bash
uvicorn main:app --reload --port 8000
```

6. API Documentation:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## 📁 Project Structure

```
TryOnX-Website/
├── backend/              # FastAPI backend
│   ├── main.py          # API endpoints
│   ├── requirements.txt  # Python dependencies
│   └── README.md        # Backend documentation
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.tsx
│   │   ├── Mannequin3D.tsx
│   │   ├── Canvas3D.tsx
│   │   └── GlassPanel.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx     # Hero with 3D mannequin
│   │   ├── Generate.tsx # AI prompt generation
│   │   ├── Sketch.tsx   # Sketch-to-design
│   │   ├── TryOn.tsx    # 3D virtual try-on
│   │   └── Chat.tsx     # AI chatbot
│   ├── styles/          # Global styles
│   ├── utils/           # Utility functions
│   │   └── api.ts       # API client
│   ├── types/           # TypeScript types
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── index.html           # HTML template
└── package.json         # Dependencies
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Three.js** - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Lucide React** - Icons

### Backend
- **FastAPI** - Python web framework
- **Uvicorn** - ASGI server
- **Pydantic** - Data validation

### AI/ML (To be integrated)
- **LLaMA 3** - Language model (via Groq/Replicate)
- **ControlNet** - Controlled image generation
- **SDXL** - High-quality image generation
- **YOLOv8** - Object detection
- **Blender** - 3D mesh generation
- **Kaolin** - Neural mesh reconstruction

## 📝 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Backend
- `python main.py` - Run FastAPI server
- `uvicorn main:app --reload` - Run with auto-reload

## 🎯 Features

### 1. Hero Section
- High-fidelity 3D mannequin with floating fabric strips
- Apple Vision Pro-inspired glass panels
- Smooth animations and volumetric lighting

### 2. AI Prompt Generation
- Natural language design descriptions
- Real-time generation preview
- Example prompts and suggestions

### 3. Sketch-to-Design
- Upload rough sketches
- Automatic component detection
- AI-powered refinement

### 4. 3D Virtual Try-On
- Interactive 3D viewer
- Fabric upload and color selection
- Lighting controls
- Export GLB/FBX files

### 5. AI Chatbot
- Fashion-specialized assistant
- Design suggestions
- Fabric recommendations
- Style corrections

## 🔌 API Integration

The frontend uses the API client in `src/utils/api.ts` to communicate with the backend. Update `VITE_API_URL` in your `.env` file to point to your backend server.

## 🎨 Design System

- **Colors**: Indigo, Purple, Pink gradients
- **Typography**: Inter font family
- **Components**: Glass morphism panels with backdrop blur
- **Animations**: Framer Motion for smooth transitions
- **3D**: Three.js with React Three Fiber

## 🚧 Next Steps

1. Integrate AI models (LLaMA 3, ControlNet, YOLOv8)
2. Set up Blender Python API for 3D conversion
3. Implement AWS S3 for file storage
4. Add authentication and user accounts
5. Deploy frontend and backend

## 📄 License

ISC

## 👥 Target Users

- Independent designers
- Fashion studios
- Apparel manufacturers
- E-commerce brands
- Creators experimenting with AI fashion

