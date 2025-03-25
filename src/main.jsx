import './style.css'
import { createRoot } from 'react-dom/client'
import Experience from './Experience.jsx'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

createRoot(document.getElementById('root')).render(
    <Canvas
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 0, 3, 6 ]
        } }
    >
        <Experience />
        <OrbitControls />
    </Canvas>
)
