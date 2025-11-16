import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'

function Mannequin() {
  const mannequinRef = useRef<Group>(null)
  const fabricStrip1Ref = useRef<Group>(null)
  const fabricStrip2Ref = useRef<Group>(null)
  const fabricStrip3Ref = useRef<Group>(null)

  // Gentle floating animation
  useFrame((state) => {
    if (mannequinRef.current) {
      mannequinRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      mannequinRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05
    }
    if (fabricStrip1Ref.current) {
      fabricStrip1Ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.2
      fabricStrip1Ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.1
    }
    if (fabricStrip2Ref.current) {
      fabricStrip2Ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.15
      fabricStrip2Ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.08
    }
    if (fabricStrip3Ref.current) {
      fabricStrip3Ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.6) * 0.18
      fabricStrip3Ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.12
    }
  })

  return (
    <group ref={mannequinRef}>
      {/* Main Mannequin Body - Ceramic/Metal Hybrid */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        {/* Torso */}
        <cylinderGeometry args={[0.4, 0.5, 1.2, 32]} />
        <meshStandardMaterial
          color="#e8e8e8"
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1}
        />
      </mesh>

      {/* Head */}
      <mesh position={[0, 0.7, 0]} castShadow>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#e8e8e8"
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1}
        />
      </mesh>

      {/* Shoulders */}
      <mesh position={[-0.5, 0.4, 0]} castShadow>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color="#e8e8e8"
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1}
        />
      </mesh>
      <mesh position={[0.5, 0.4, 0]} castShadow>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color="#e8e8e8"
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1}
        />
      </mesh>

      {/* Floating Fabric Strips */}
      <group ref={fabricStrip1Ref}>
        <mesh position={[0.6, 0.2, 0]} castShadow>
          <planeGeometry args={[0.3, 0.8]} />
          <meshStandardMaterial
            color="#a78bfa"
            opacity={0.6}
            transparent
            side={2}
          />
        </mesh>
      </group>

      <group ref={fabricStrip2Ref}>
        <mesh position={[-0.5, -0.1, 0.3]} castShadow>
          <planeGeometry args={[0.25, 0.6]} />
          <meshStandardMaterial
            color="#818cf8"
            opacity={0.5}
            transparent
            side={2}
          />
        </mesh>
      </group>

      <group ref={fabricStrip3Ref}>
        <mesh position={[0, -0.3, 0.5]} castShadow>
          <planeGeometry args={[0.35, 0.7]} />
          <meshStandardMaterial
            color="#c084fc"
            opacity={0.55}
            transparent
            side={2}
          />
        </mesh>
      </group>
    </group>
  )
}

export default function Mannequin3D() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 3]} fov={50} />
      <OrbitControls
        enablePan={false}
        minDistance={2}
        maxDistance={5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-5, 3, -5]} intensity={0.5} color="#818cf8" />
      <pointLight position={[5, 3, -5]} intensity={0.5} color="#c084fc" />
      <Environment preset="city" />
      <Mannequin />
    </>
  )
}

