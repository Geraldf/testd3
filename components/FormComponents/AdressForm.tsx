import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { Aform } from './Aform'

type Props = {}

export default function AdressForm({}: Props) {
  return (
    <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger>Adresse</AccordionTrigger>
      <AccordionContent>
      
       <Aform />
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Is it styled?</AccordionTrigger>
      <AccordionContent>
        Yes. It comes with default styles that matches the other
        components&apos; aesthetic.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Is it animated?</AccordionTrigger>
      <AccordionContent>
        {"Yes. It's animated by default, but you can disable it if you prefer."}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  )
}