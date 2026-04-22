import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'
import useMobile from '../hooks/useMobile'

// Atmosphere Shaders (keep the same as before)
const atmosphereVertexShader = /* glsl */ `...`
const atmosphereFragmentShader = /* glsl */ `...`

const Planet = () => {
  const groupRef = useRef()
  const atmosphereMaterialRef = useRef()
  const texture = useMemo(() => new THREE.TextureLoader().load(
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg'
  ), [])

  useFrame((state, delta) => {
    groupRef.current.rotation.y += 0.001
    if (atmosphereMaterialRef.current) {
      atmosphereMaterialRef.current.uniforms.time.value += delta
    }
  })

  return (
    <group ref={groupRef}>
      <Sphere args={[4.5, 64, 64]}>
        <meshStandardMaterial
          map={texture}
          metalness={0.4}
          roughness={0.7}
        />
      </Sphere>
      <Sphere args={[4.95, 64, 64]}>
        <shaderMaterial
          ref={atmosphereMaterialRef}
          vertexShader={atmosphereVertexShader}
          fragmentShader={atmosphereFragmentShader}
          uniforms={{
            lightDirection: { value: new THREE.Vector3(5, 5, 5).normalize() },
            atmosphereColor: { value: new THREE.Color('#4facfe') },
            time: { value: 0 }
          }}
          transparent
          depthWrite={false}
        />
      </Sphere>
    </group>
  )
}

const StarField = () => {
  const isMobile = useMobile();
  const count = isMobile ? 1000 : 5000;
  const mesh = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i += 3) {
      arr[i] = (Math.random() - 0.5) * 100
      arr[i + 1] = (Math.random() - 0.5) * 100
      arr[i + 2] = (Math.random() - 0.5) * 100
    }
    return arr
  }, [count])

  const velocities = useMemo(() => 
    new Float32Array(count).map(() => 0.01 + Math.random() * 0.02), [count]
  )

  useFrame(() => {
    const positions = mesh.current.geometry.attributes.position.array
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] += (Math.random() - 0.5) * velocities[i/3]
      positions[i + 1] += (Math.random() - 0.5) * velocities[i/3]
      positions[i + 2] += (Math.random() - 0.5) * velocities[i/3]
    }
    mesh.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points key={count} ref={mesh} position={[0, 0, -50]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#FFFFFF"
        transparent
        opacity={0.8}
        sizeAttenuation={false}
      />
    </points>
  )
}

const BackgroundParticles = () => {
  const isMobile = useMobile();
  const particles = useMemo(() => {
    const count = isMobile ? 50 : 400;
    return Array.from({ length: count }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.1,
      speedY: (Math.random() - 0.5) * 0.1,
      opacity: Math.random() * 0.5 + 0.3
    }))
  }, [isMobile])

  return (
    <div className="background-particles">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animation: `float ${10 + Math.random() * 20}s infinite linear`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  )
}

const Background = () => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -1,
      pointerEvents: 'none',
      background: 'linear-gradient(to bottom, #000000, #1a1a2e)'
    }}>
      <BackgroundParticles />
      
      <Canvas camera={{ position: [0, 0, 20], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <Planet />
        <StarField />
        
        <EffectComposer>
          <Bloom
            intensity={1.5}
            kernelSize={3}
            luminanceThreshold={0.7}
            luminanceSmoothing={0.1}
          />
        </EffectComposer>
      </Canvas>

      <style jsx global>{`
        .background-particles {
          position: fixed;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }
        
        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          filter: blur(1px);
          transform: translate(-50%, -50%);
        }
        
        @keyframes float {
          0% {
            transform: translate(-50%, -50%) translate(0, 0);
          }
          25% {
            transform: translate(-50%, -50%) translate(10px, 10px);
          }
          50% {
            transform: translate(-50%, -50%) translate(0, 20px);
          }
          75% {
            transform: translate(-50%, -50%) translate(-10px, 10px);
          }
          100% {
            transform: translate(-50%, -50%) translate(0, 0);
          }
        }
      `}</style>
    </div>
  )
}

export default Background