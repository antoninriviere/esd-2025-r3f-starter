
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Experience() {

    const capsuleRef = useRef()

    useFrame((state, delta) => {
        capsuleRef.current.rotation.y += 0.01
        capsuleRef.current.position.x = Math.sin(state.clock.elapsedTime)
    })

    return <>
        <mesh ref={capsuleRef} scale={[1, 1, 1]}>
            <capsuleGeometry args={[1, 1, 4, 8]} />
            <meshBasicMaterial args={[{ color: 'hotpink' }]} wireframe={true} />
        </mesh>
    </>
}