import { TreeComponent } from '@/components/d3/tree/TreeComponent'
import React from 'react'
import { data } from './flare'
import Grid from '@/components/d3/tree/Grid'
import Test from '@/components/d3/tree/Test'
import { Dendrogram } from '@/components/d3/tree/Dendrogram'

type Props = {}

export default function page({}: Props) {
  return (
    <section className='py2'>
      <Dendrogram width={1000} height={3000} data={data} />
    </section>
  )
}
