
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Experience() {

    const capsuleRef = useRef()

    useFrame((state, delta) => {
        capsuleRef.current.rotation.y += 0.01
        capsuleRef.current.position.x = Math.sin(state.clock.elapsedTime)
    })

    return <>
    <directionalLight position={[1, 2, 3]} intensity={4.5} />
        <ambientLight intensity={1.5} />
        <mesh ref={capsuleRef} scale={[1, 1, 1]} position-y={ 1 }>
            <sphereGeometry args={[1, 32, 16]} />
            <meshBasicMaterial args={[{ color: 'orange' }]} wireframe={false} />
        </mesh>

        <mesh
            position-y={ - 1 }
        >
            <boxGeometry args={[20, 0.5, 20]}/>
            <meshStandardMaterial color="#f2f5ff" side={THREE.DoubleSide} />
        </mesh>
    </>
}