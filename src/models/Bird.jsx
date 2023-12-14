// import React, { useEffect } from 'react'
// import birdScene from '../assets/3d/bird.glb';
// import {useGLTF, useAnimations } from '@react-three/drei';
// // import {useAn}

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";


const Bird = () => {
  
  const {scene, animations} = useGLTF(birdScene);
  const birdRef = useRef();
  const {actions} = useAnimations(animations,birdRef);


  

  useEffect(()=>{
    actions['Take 001'].play();

  }, []);

  useFrame(({clock, camera}) =>{
    // birdRef.current.rotation.x +=0.15*delta;

    //sin wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2 
    
    
    if(birdRef.current.position.x > camera.position.x + 10){
      birdRef.current.rotation.y = Math.PI;
    }else if(birdRef.current.position.x < camera.position.x - 10){
      birdRef.current.rotation.y = 0;
    }
    
    
    
    if(birdRef.current.rotation.y === 0){
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;

    }else{
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  })
  
  return (
    <mesh 
    position={[-5,2,1]} 
    scale={[0.003,0.003,0.003]}
    ref={birdRef}
    >
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird;
