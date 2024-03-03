import { FlareData } from '@/app/d3/flare'
import { CirclesAndText } from '@/components/SVG/SVGCircleAndText'
import React from 'react'
import { LocalRoot } from './Test'


// export interface D3NodeData<T> {
//   name: string
//   children: D3NodeData<T>[]
// }

type D3NodeData<T> = {
  name: string
  children: D3NodeData<T>[]
}

type NodeInfo<T> = {
  data: D3NodeData<T>
  height: number
  depth: number
  parent: null
  children: D3Node<T>[]
  x: number
  y: number
}
export interface D3Node<T> {
  node?: LocalRoot<T>
}

export default function RunRoot(props: D3Node<FlareData>) {
  const { node } = props
  if (node === undefined) {
    return <></>
  }
  if (node.x === undefined) {
    return <></>
  }
 
  return (
    <>
      <CirclesAndText x={node.x} y={node.y!} t={node.data.name} />
      {node.children && node.children.map((c:LocalRoot<FlareData>, i: number) => <RunRoot key={i} node={c} />)}
      
    </>
  )
}
