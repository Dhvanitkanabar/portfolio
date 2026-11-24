"use client";
import React, { useRef, useMemo, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MOTION_CONFIG } from "@/config/motion.config";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Floating Wireframe & Glass Geometry
 */
function FloatingCore({ scrollRef, targetMouseRef, currentMouseRef }) {
  const meshRef = useRef();
  const innerRef = useRef();
  const { invalidate } = useThree();

  useFrame((state, delta) => {
    if (document.hidden) return;

    // Smooth damping for mouse parallax
    const dx = targetMouseRef.current.x - currentMouseRef.current.x;
    const dy = targetMouseRef.current.y - currentMouseRef.current.y;
    currentMouseRef.current.x += dx * 0.06;
    currentMouseRef.current.y += dy * 0.06;

    const scroll = scrollRef.current; // 0 to 1

    if (meshRef.current) {
      // Rotation driven by subtle mouse parallax + scroll progress
      meshRef.current.rotation.x = currentMouseRef.current.y * 0.75 + scroll * Math.PI * 1.5;
      meshRef.current.rotation.y = currentMouseRef.current.x * 0.75 + scroll * Math.PI * 2.0;

      // Position shifts slightly to the right side on desktop so it sits beside hero text
      meshRef.current.position.x = 2.2 + currentMouseRef.current.x * 0.4;
      meshRef.current.position.y = 0.2 - currentMouseRef.current.y * 0.3 - scroll * 4.5;
      meshRef.current.position.z = -scroll * 2.5;

      // Subtle scale breathing
      const scale = 1.0 - scroll * 0.25;
      meshRef.current.scale.set(scale, scale, scale);
    }

    if (innerRef.current) {
      innerRef.current.rotation.x = -currentMouseRef.current.y * 0.5 - scroll * Math.PI;
      innerRef.current.rotation.y = -currentMouseRef.current.x * 0.5 + scroll * Math.PI * 1.5;
    }

    // Keep invalidating while motion is active
    if (Math.abs(dx) > 0.0005 || Math.abs(dy) > 0.0005) {
      invalidate();
    }
  });

  return (
    <group ref={meshRef} position={[2.2, 0.2, 0]}>
      {/* Outer Wireframe Icosahedron */}
      <mesh>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial
          color={MOTION_CONFIG.colors.tealPrimary}
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Inner Translucent Octahedron Core */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.9, 0]} />
        <meshBasicMaterial
          color={MOTION_CONFIG.colors.tealSecondary}
          wireframe
          transparent
          opacity={0.55}
        />
      </mesh>
    </group>
  );
}

/**
 * Ambient Particle Constellation (1500 particles on desktop)
 */
function ParticleField({ scrollRef, currentMouseRef }) {
  const pointsRef = useRef();
  const particleCount = 1200; // Optimized for consistent 60+ FPS on mid-range laptops

  // Generate deterministic particles within comfortable frustum
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(MOTION_CONFIG.colors.tealPrimary);
    const color2 = new THREE.Color(MOTION_CONFIG.colors.tealSecondary);

    for (let i = 0; i < particleCount; i++) {
      // Cylindrical/spherical spread
      const radius = 3.5 + Math.random() * 8.5;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 14;

      pos[i * 3] = Math.cos(theta) * radius;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;

      // Subtle color gradient between cyan and teal
      const mixedColor = color1.clone().lerp(color2, Math.random());
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }

    return [pos, col];
  }, [particleCount]);

  useFrame((state) => {
    if (document.hidden) return;
    if (pointsRef.current) {
      const scroll = scrollRef.current;
      // Gentle floating drift with mouse and scroll
      pointsRef.current.rotation.y = currentMouseRef.current.x * 0.15 + scroll * 0.5;
      pointsRef.current.rotation.x = -currentMouseRef.current.y * 0.15;
      pointsRef.current.position.y = scroll * 2.0;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/**
 * Camera Controller syncing with mouse parallax and ScrollTrigger
 */
function SceneController({ scrollRef, targetMouseRef, currentMouseRef }) {
  const { camera, invalidate } = useThree();

  useEffect(() => {
    // 1. Mouse movement tracking
    const handleMouseMove = (e) => {
      if (document.hidden) return;
      const x = (e.clientX / window.innerWidth) * 2 - 1; // -1 to 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1; // -1 to 1

      targetMouseRef.current.x = x * 0.8;
      targetMouseRef.current.y = y * 0.8;
      invalidate();
    };

    // 2. ScrollTrigger synchronization
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        scrollRef.current = self.progress;
        invalidate();
      },
    });

    // 3. Tab visibility handling
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        invalidate();
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Initial render
    invalidate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      trigger.kill();
    };
  }, [camera, invalidate, scrollRef, targetMouseRef]);

  useFrame((state) => {
    if (document.hidden) return;
    const scroll = scrollRef.current;
    // Camera reacts to mouse offset and scroll downward
    state.camera.position.x = currentMouseRef.current.x * 0.35;
    state.camera.position.y = -currentMouseRef.current.y * 0.35;
    state.camera.lookAt(0, -scroll * 1.5, -2);
  });

  return null;
}

/**
 * Primary Three.js R3F Canvas Container
 */
const Hero3DScene = ({ onContextLost }) => {
  const scrollRef = useRef(0);
  const targetMouseRef = useRef({ x: 0, y: 0 });
  const currentMouseRef = useRef({ x: 0, y: 0 });

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 w-full h-full overflow-hidden select-none"
      aria-hidden="true"
    >
      <Canvas
        frameloop="demand"
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          // Listen for WebGL context loss to gracefully fall back
          gl.domElement.addEventListener("webglcontextlost", (event) => {
            event.preventDefault();
            console.warn("WebGL context lost. Falling back to CSS mesh gradient.");
            if (onContextLost) onContextLost();
          });
        }}
      >
        <SceneController
          scrollRef={scrollRef}
          targetMouseRef={targetMouseRef}
          currentMouseRef={currentMouseRef}
        />
        <ambientLight intensity={0.5} />
        <FloatingCore
          scrollRef={scrollRef}
          targetMouseRef={targetMouseRef}
          currentMouseRef={currentMouseRef}
        />
        <ParticleField
          scrollRef={scrollRef}
          currentMouseRef={currentMouseRef}
        />
      </Canvas>

      {/* Contrast Guard Overlay: subtle radial gradient ensures text is crisp & readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-light/85 via-light/40 to-transparent dark:from-dark/90 dark:via-dark/50 dark:to-transparent pointer-events-none" />
    </div>
  );
};

export default Hero3DScene;
