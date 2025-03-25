import './style.css'
import { createRoot } from 'react-dom/client'
import Experience from './Experience.jsx'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

createRoot(document.getElementById('root')).render(
    <Canvas>
        <Experience />
        <OrbitControls />
    </Canvas>
)
