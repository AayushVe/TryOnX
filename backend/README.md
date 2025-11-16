# TryOnX Backend API

FastAPI backend for AI-powered fashion design and virtual try-on system.

## Features

- AI Prompt-Based Outfit Generation (LLaMA 3 + ControlNet/SDXL)
- Sketch-to-Design AI (YOLOv8 + ControlNet)
- Cloth Image Processing
- 2D to 3D Conversion (Blender + Kaolin)
- AI Chatbot (LLaMA 3)
- File Upload Management

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the server:
```bash
python main.py
```

Or with uvicorn:
```bash
uvicorn main:app --reload --port 8000
```

## API Documentation

Once the server is running, visit:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Environment Variables

Create a `.env` file:
```
API_KEY_GROQ=your_groq_api_key
API_KEY_REPLICATE=your_replicate_api_key
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
S3_BUCKET_NAME=your_bucket_name
```

## Integration Notes

### AI Models Integration

1. **LLaMA 3**: Use Groq or Replicate API for fast inference
2. **ControlNet/SDXL**: Use Hugging Face Diffusers or Replicate
3. **YOLOv8**: Use Ultralytics library for component detection
4. **Blender**: Use Blender Python API for 3D mesh generation
5. **Kaolin**: Use NVIDIA Kaolin for neural mesh reconstruction

### Example API Calls

```python
# Generate design
POST /api/generate
{
  "prompt": "A pastel draped top with mesh sleeves",
  "style": "fashion"
}

# Refine sketch
POST /api/sketch/refine
{
  "image_url": "https://example.com/sketch.jpg",
  "refine_level": "high"
}

# Process fabric
POST /api/fabric/process
{
  "image_url": "https://example.com/fabric.jpg",
  "garment_type": "top"
}

# Chat with AI
POST /api/chat
{
  "message": "What fabrics work best for summer dresses?",
  "conversation_id": "optional_conversation_id"
}
```


