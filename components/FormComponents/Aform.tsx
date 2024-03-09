'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/accordion'

const formSchema = z.object({
  vorname: z.string().min(2, {
    message: 'Vorname must be at least 2 characters.'
  }),
  nachname: z.string().min(2, {
    message: 'Nachname must be at least 2 characters.'
  }),
  strasse: z.string().min(2, {
    message: 'Strasse must be at least 2 characters.'
  }),
  plz: z.string().min(4, {
    message: 'Plz must be at least 4 characters.'
  }),
  ort: z.string().min(2, {
    message: 'Ort must be at least 2 characters.'
  }),
})

export function Aform() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vorname: ''
    }
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='item-1'>
            <AccordionTrigger>Adresse</AccordionTrigger>
            <AccordionContent>
              <FormField
                control={form.control}
                name='vorname'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vorname</FormLabel>
                    <FormControl>
                      <Input placeholder='vorname' {...field} />
                    </FormControl>
                    <FormDescription>
                      Bitte geben Sie Ihren Vornamen ein.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}
