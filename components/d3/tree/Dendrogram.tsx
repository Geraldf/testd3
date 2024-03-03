"use client"
import { useMemo } from 'react'

import * as d3 from 'd3'
import { FlareData } from '@/app/d3/flare'


const MARGIN = { top: 10, right: 10, bottom: 10, left: 10 }

type DendrogramProps = {
  width: number
  height: number
  data: FlareData
}

export const Dendrogram = ({ width, height, data }: DendrogramProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left
  const boundsHeight = height - MARGIN.top - MARGIN.bottom

  const hierarchy = useMemo(() => {
    return d3.hierarchy(data).sum(d => d.value!)
  }, [data])

  const onCLick = (node: d3.HierarchyNode<FlareData>) => {
    //node.children = node.children ? null : node._children
    console.log(node)
  }

  const dendrogram = useMemo(() => {
    const dendrogramGenerator = d3
      .tree<FlareData>()
      .size([boundsHeight, boundsWidth])
      .nodeSize([15, width / (hierarchy.height + 1)])
    return dendrogramGenerator(hierarchy)
  }, [hierarchy, width, height])

  const allNodes = dendrogram.descendants().map(node => {
    return (
      <g key={node.id}>
        <circle
          //cx={node.y}
          //cy={node.x}
          r={5}
          stroke='transparent'
          fill={'#69b3a2'}
          onClick={() => onCLick(node)}
        />

        <text
          //x={node.y - 10}
          x={node.children ?  - 10 :  + 10}
          //y={node.x}
          fontSize={12}
          textAnchor={node.children ? 'end' : 'start'}
          alignmentBaseline='middle'
          font-size='10px'
        >
          {node.data.name}
        </text>
        <animateTransform
        attributeName='transform'
        begin='0s'
        dur='0.5s'
        type='translate'
        from='0 0'
        to={`${node.y} ${node.x}`}
        fill='freeze'
      />
        
      </g>
    )
  })

  const horizontalLinkGenerator = d3.linkHorizontal()

  const allEdges = dendrogram.descendants().map(node => {
    if (!node.parent) {
      return
    }
    return (
      
      <path
        key={node.id}
        fill='none'
        stroke='grey'
        d={horizontalLinkGenerator({
          source: [node.parent.y, node.parent.x],
          target: [node.y, node.x]
        })!}
        
      />
    
    )
  })

  return (
    <div>
      <svg width={width} height={height} viewBox="-30 5 1000 500">
        <g
          cursor= "pointer"
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        >
          {allNodes}
          {allEdges}
        </g>
      </svg>
    </div>
  )
}
