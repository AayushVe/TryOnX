import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Mannequin3D from './Mannequin3D'

function Canvas3D() {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden relative">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          failIfMajorPerformanceCaveat: false,
        }}
        className="bg-transparent"
        camera={{ position: [0, 0, 4], fov: 50 }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 0)
        }}
      >
        <Suspense fallback={null}>
          <Mannequin3D />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent rounded-2xl"></div>
      
      <div className="absolute bottom-4 left-4 text-xs text-indigo-300/70 font-medium">
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  )
}

export default Canvas3D
