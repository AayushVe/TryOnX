import { useRef, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import type { Group } from 'three'

function MannequinModel() {
  const mannequinRef = useRef<Group>(null)
  const { scene } = useGLTF('/mannequin.glb')

  useFrame((state) => {
    if (mannequinRef.current) {
      mannequinRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
      mannequinRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02
    }
  })

  return (
    <group ref={mannequinRef}>
      <primitive object={scene} scale={1.6} position={[0, -1.4, 0]} />
    </group>
  )
}

export default function Mannequin3D() {
  return (
    <>
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={1.5}
        maxDistance={6}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 1.5}
        autoRotate={false}
        makeDefault
      />
      
      <ambientLight intensity={0.8} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <directionalLight
        position={[-5, 3, -3]}
        intensity={0.8}
        color="#818cf8"
      />
      <pointLight position={[5, 3, -5]} intensity={0.8} color="#c084fc" />
      <pointLight position={[0, 5, 2]} intensity={0.6} color="#a78bfa" />
      <hemisphereLight intensity={0.5} color="#ffffff" groundColor="#666666" />
      
      <Suspense fallback={null}>
        <MannequinModel />
      </Suspense>
    </>
  )
}

useGLTF.preload('/mannequin.glb')
