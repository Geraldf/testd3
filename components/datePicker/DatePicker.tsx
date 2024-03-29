'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'

import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { PopoverClose } from '@radix-ui/react-popover'
import { CloseIcon } from '../icons/AppIcons'
import { useState } from 'react'

type Props = {
  prompt?: string
  date?: Date
  SetNewDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}
export function DatePicker(props: Props) {
  const { prompt, date, SetNewDate } = props
  //const [date, setDate] = React.useState<Date>()
  const [calendarOpen, setCalendarOpen] = useState(false);

  return (
    <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[180px] justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className='mr-2 h-4 w-4' />
          {date ? (
            format(date, 'PPP', { locale: de })
          ) : (
            <span>{prompt || 'Pick a date'}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
       
          <Calendar
            mode='single'
            selected={date}
            onSelect={(d) => {
              SetNewDate(d);
              setCalendarOpen(false);
              
            }}
            initialFocus
            locale={de}
          />
       
      </PopoverContent>
    </Popover>
  )
}
