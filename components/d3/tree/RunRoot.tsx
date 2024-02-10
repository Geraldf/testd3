import { FlareData } from '@/app/d3/flare'
import { CirclesAndText } from '@/components/SVG/SVGCircleAndText'
import React from 'react'

// export interface D3NodeData<T> {
//   name: string
//   children: D3NodeData<T>[]
// }

type D3NodeData<T> = {
  name: string
  children: D3NodeData<T>[]
}
export interface D3Node<T> {
  data: D3NodeData<T>
  height: number
  depth: number
  parent: null
  children: D3Node<T>[]
  x: number
  y: number
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
      <CirclesAndText x={node.x} y={node.y} t={node.data.name} />
      {node.children && node.children.map((c, i) => <RunRoot key={i} node={c} />)}
      
    </>
  )
}
