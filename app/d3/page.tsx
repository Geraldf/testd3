import TreeComponent from '@/components/d3/tree/TreeComponent'
import React from 'react'
import { data } from './flare';

type Props = {}

export default function page({}: Props) {
  return (
    <section className="py2">
       <TreeComponent data={data}/>
    </section>
  )
}