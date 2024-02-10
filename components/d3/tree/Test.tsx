'use client'
import React, { useEffect } from 'react'
import grid from './Grid'
import * as d3 from 'd3'

import { SVGCircles } from '@/components/SVG/SVGCircles'
import { SVGText } from '@/components/SVG/SVGText'
import { CirclesAndText } from '@/components/SVG/SVGCircleAndText'
import { FlareData } from '@/app/d3/flare'
import { jsonc } from 'jsonc'
import RunRoot, { D3Node } from './RunRoot'

type Props = {
  data: FlareData
}

export default function Test(props: Props) {
  const { data } = props
  const clicked = e => {}

  const svgReg = React.useRef<SVGSVGElement>(null)

  const root: d3.HierarchyNode<FlareData> = d3.hierarchy(data)
  const width = 928

  // Compute the tree height; this approach will allow the height of the
  // SVG to scale according to the breadth (width) of the tree layout.

  const dx = 10
  const dy = width / (root.height + 1)
  const tree = d3.tree().nodeSize([dx, dy])
  tree(root)

  useEffect(() => {
    // Create a tree layout.
  }, [])

  if (root.x === undefined) {
    return <></>
  } else
    return (
      <>
        <svg  viewBox="0 -700 3000 3000">
          <RunRoot node={root} />
        </svg>
      </>
    )
}
