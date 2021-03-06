/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/1.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={nodes.Object001.material} geometry={nodes.Object001.geometry} />
      <mesh material={nodes.Plane004.material} geometry={nodes.Plane004.geometry} />
      <mesh material={nodes.Object002.material} geometry={nodes.Object002.geometry} />
    </group>
  )
}

useGLTF.preload('/1.gltf')
