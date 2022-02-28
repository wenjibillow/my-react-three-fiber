import React, { Suspense } from 'react'
import './styles.css'
import styled from 'styled-components'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// import { MeshLambertMaterial } from 'three';
// import { BoxBufferGeometry } from 'three';
import Box from './components/Box'
import AnimatedSphere from './components/AnimatedSphere'
import Iphone from './components/Iphone'
import TextSection from "./components/TextSection"
import Background from "./components/Background"
import ShoeCanvas from './components/ShoeCanvas'

export default function App() {
  return (
    <>
      <Wrapper className='App'>
        <Background />
        <TextSection />
        <Canvas className='canvas'>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2] } intensity={1} />
          <Suspense fallback={null}>
            <Box />
          </Suspense>
        </Canvas>
        <Canvas className='canvas'>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2] } intensity={1} />
          <Suspense fallback={null}>
            <AnimatedSphere />
          </Suspense>
        </Canvas>
        <Canvas className='canvas'>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2] } intensity={1} />
          <Suspense fallback={null}>
            <Iphone />
          </Suspense>
        </Canvas>
      </Wrapper>
      <Products className='App'>
        <ShoeCanvas />
      </Products>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 500px;
  }
`
const Products = styled.div`
  position: relative;
  background: #ffffff;

  canvas {
    height: 500px;
  }
`

