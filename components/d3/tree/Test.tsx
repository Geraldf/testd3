'use client'
import React, { useEffect } from 'react'
import * as d3 from 'd3'
import { FlareData } from '@/app/d3/flare'
import RunRoot from './RunRoot'
type Props = {
  data: FlareData
}

type LocalRoot<T> = d3.HierarchyPointNode<T> & {
  x0?: number
  y0?: number
  _children?: LocalRoot<T>[]
  id?: number | string
}

export default function Test(props: Props) {
  const { data } = props

  const svgReg = React.useRef<SVGSVGElement>(null)

  const root: d3.HierarchyNode<FlareData> = d3.hierarchy(data)
  const width = 928

  // Compute the tree height; this approach will allow the height of the
  // SVG to scale according to the breadth (width) of the tree layout.

  const dx = 10
  const dy = width / (root.height + 1)
  const tree = d3.tree<FlareData>().nodeSize([dx, dy])
  var r: LocalRoot<FlareData> = tree(root)
  r.x0 = dy / 2
  r.y0 = 0
  r.descendants().forEach((d, i: number) => {
    d.id = i
    d._children = d.children
    if (d.depth && d.data.name.length !== 7) d.children = null
  })
  r = tree(root)
  var linkGen = d3.linkHorizontal();

  const update = source => {
    const nodes = root.descendants().reverse()
    const links = root.links()
    tree(root)
    let left = root
    let right = root
    root.eachBefore(node => {
      if (node.x < left.x) left = node
      if (node.x > right.x) right = node
    })
    const height = right.x - left.x + marginTop + marginBottom
    root.eachBefore(d => {
      d.x0 = d.x
      d.y0 = d.y
    })
  }
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
