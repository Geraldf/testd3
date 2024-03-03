'use client'
import React, { useEffect } from 'react'
import * as d3 from 'd3'
import { FlareData } from '@/app/d3/flare'
import RunRoot from './RunRoot'
type Props = {
  data: FlareData
}

export type LocalRoot<T> = d3.HierarchyNode<T> & {
  x?: number
  y?: number
  x0?: number
  y0?: number
  _children?: LocalRoot<T>[]
  id?:  string
}

export default function Test(props: Props) {
  const { data } = props

  const svgReg = React.useRef<SVGSVGElement>(null)

  const root: LocalRoot<FlareData> = d3.hierarchy(data)
  const width = 928

  // Compute the tree height; this approach will allow the height of the
  // SVG to scale according to the breadth (width) of the tree layout.

  const dx = 10
  const dy = width / (root.height + 1)
  const tree = d3.tree<FlareData>().nodeSize([dx, dy])
  var r: LocalRoot<FlareData> = tree(root)
  r.x0 = dy / 2
  r.y0 = 0
  r.descendants().forEach((d:LocalRoot<FlareData>, i: number) => {
    d.id = i.toString()
    d._children = d.children
    if (d.depth && d.data.name.length !== 7) d.children = undefined
  })
  r = tree(root)
  var linkGen = d3.linkHorizontal();

  
  useEffect(() => {
    // Create a tree layout.
  }, [])

  if (root.x === undefined) {
    return <></>
  } else
    return (
      <>
        <svg viewBox='-10 -700 1500  1500'>
          <RunRoot node={root} />
        </svg>
      </>
    )
}
