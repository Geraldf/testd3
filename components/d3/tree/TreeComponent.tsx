'use client'
import { FlareData } from '@/app/d3/flare'
import React, { useEffect } from 'react'
import * as d3 from 'd3'

type Props = { data: FlareData }

export default function TreeComponent(props: Props) {
  const { data } = props
  const[value, setValue] = React.useState(0)


  const ref = React.createRef<SVGSVGElement>()

  const cl = () => {
    setValue(value + 1)
  }
  useEffect(() => {
    const svg = d3.select(ref.current)
    const tree = d3
      .tree()
      .size([360, 0])
      .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth)

    const root = d3.hierarchy(data)
    
        svg.append("text")
        .attr("x", 0)
        .attr("y", ".35em")
        .attr("dy", ".35em")
        .text(`Text = ${value}`);
    
    svg
      .append('circle')
      .attr('cx', 100)
      .attr('cy', 100)
      .attr('r', 50)
   
      .attr('fill', '#69a3b2')
    
    
  })
  return <svg ref={ref} onClick={cl}></svg>
}
