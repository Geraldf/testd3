import { TreeComponent } from '@/components/d3/tree/TreeComponent'
import React from 'react'
import { data } from './flare'
import Grid from '@/components/d3/tree/Grid'
import Test from '@/components/d3/tree/Test'

type Props = {}

export default function page({}: Props) {
  return (
    <section className='py2'>
   <Test data={data}/>
    </section>
  )
}
