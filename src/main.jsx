import './style.css'
import { createRoot } from 'react-dom/client'
import Experience from './Experience.jsx'
import { Canvas } from '@react-three/fiber'

createRoot(document.getElementById('root')).render(
    <Canvas>
        <Experience />
    </Canvas>
)
