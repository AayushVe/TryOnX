const API_BASE_URL = import.meta.env.VITE_API_URL || (typeof window !== 'undefined' ? `https://${window.location.hostname}:8000` : 'http://localhost:8000')

export interface GenerateRequest {
  prompt: string
  style?: string
  negative_prompt?: string
}

export interface GenerateResponse {
  status: string
  image_url: string
  prompt: string
  processing_time: number
}

export interface SketchRequest {
  image_url: string
  refine_level?: string
}

export interface SketchResponse {
  status: string
  refined_image_url: string
  detected_components: string[]
  processing_time: number
}

export interface ChatRequest {
  message: string
  conversation_id?: string
}

export interface ChatResponse {
  status: string
  response: string
  conversation_id: string
}

export const api = {
  async generate(request: GenerateRequest): Promise<GenerateResponse> {
    const response = await fetch(`${API_BASE_URL}/api/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
    if (!response.ok) throw new Error('Failed to generate design')
    return response.json()
  },

  async refineSketch(request: SketchRequest): Promise<SketchResponse> {
    const response = await fetch(`${API_BASE_URL}/api/sketch/refine`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
    if (!response.ok) throw new Error('Failed to refine sketch')
    return response.json()
  },

  async processFabric(imageUrl: string, garmentType: string = 'top') {
    const response = await fetch(`${API_BASE_URL}/api/fabric/process`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image_url: imageUrl, garment_type: garmentType }),
    })
    if (!response.ok) throw new Error('Failed to process fabric')
    return response.json()
  },

  async convertTo3D(imageUrl: string, garmentType: string = 'top') {
    const response = await fetch(`${API_BASE_URL}/api/convert/2d-to-3d?image_url=${encodeURIComponent(imageUrl)}&garment_type=${garmentType}`, {
      method: 'POST',
    })
    if (!response.ok) throw new Error('Failed to convert to 3D')
    return response.json()
  },

  async chat(request: ChatRequest): Promise<ChatResponse> {
    const response = await fetch(`${API_BASE_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
    if (!response.ok) throw new Error('Failed to get chat response')
    return response.json()
  },

  async uploadFile(file: File) {
    const formData = new FormData()
    formData.append('file', file)
    const response = await fetch(`${API_BASE_URL}/api/upload`, {
      method: 'POST',
      body: formData,
    })
    if (!response.ok) throw new Error('Failed to upload file')
    return response.json()
  },
}


