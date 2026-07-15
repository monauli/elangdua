'use client';

import {Canvas, useFrame} from '@react-three/fiber';
import {ContactShadows, Environment, useGLTF} from '@react-three/drei';
import {Suspense, useMemo, useRef} from 'react';
import * as THREE from 'three';

const MODEL_PATH = '/models/elang-dua.glb';

function ProductModel(){
  const group = useRef<THREE.Group>(null);
  const {scene} = useGLTF(MODEL_PATH);

  const model = useMemo(() => {
    const clone = scene.clone(true);
    // The supplied GLB is Z-up; Three.js scenes are conventionally Y-up.
    clone.rotation.x = -Math.PI / 2;
    clone.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(clone);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const sourceHeight = Math.max(size.y, 0.001);
    const scale = 2.65 / sourceHeight;

    clone.scale.setScalar(scale);
    clone.position.set(
      -center.x * scale,
      -box.min.y * scale,
      -center.z * scale,
    );

    clone.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });

    return clone;
  }, [scene]);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.18;
  });

  return <group ref={group} position={[0, -1.1, 0]}><primitive object={model}/></group>;
}

useGLTF.preload(MODEL_PATH);

export default function ProductScene(){
  return <Canvas shadows dpr={[1,1.5]} camera={{position:[0,0.2,4.4],fov:34}} gl={{antialias:true,alpha:true}}>
    <ambientLight intensity={1.5}/>
    <directionalLight castShadow position={[3,4,4]} intensity={4} color="#fff1d0"/>
    <pointLight position={[-3,1,2]} intensity={2} color="#d8ad55"/>
    <Environment preset="studio"/>
    <Suspense fallback={null}><ProductModel/></Suspense>
    <ContactShadows position={[0,-1.15,0]} opacity={.42} scale={3.4} blur={2.5} far={2}/>
  </Canvas>;
}
