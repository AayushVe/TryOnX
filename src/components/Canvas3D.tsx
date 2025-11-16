import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Mannequin3D from './Mannequin3D'

function Canvas3D() {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden relative">
      <Canvas
        shadows
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
        }}
        className="bg-transparent"
        camera={{ position: [0, 0, 3], fov: 50 }}
      >
        <Suspense fallback={null}>
          <Mannequin3D />
        </Suspense>
      </Canvas>
      {/* Ambient glow overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent rounded-2xl"></div>
    </div>
  )
}

export default Canvas3D

