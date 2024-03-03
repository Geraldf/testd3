
import React from 'react'
import { data } from './flare'
import { Dendrogram } from '@/components/d3/tree/Dendrogram'

type Props = {}

export default function page({}: Props) {
  return (
    <section className='py2'>
      <Dendrogram width={1000} height={3000} data={data} />
    </section>
  )
}
