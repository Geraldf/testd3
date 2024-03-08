import React, { Dispatch, SetStateAction, use, useEffect } from 'react'
import { Label } from '../ui/label'
import { DatePicker } from './DatePicker'
import { addDays } from 'date-fns'
import { DateRange } from 'react-day-picker'

type Props = {
  initialStartValue?: Date
  initialEndValue?: Date
  SetDateRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>
}

export const RangePicker = (props: Props) => {
  const { initialStartValue, initialEndValue, SetDateRange } = props
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: initialStartValue || new Date(2022, 0, 20),
    to: initialEndValue || addDays(new Date(2022, 0, 20), 20)
  })
  React.useEffect(() => {
    SetDateRange(date)
  }, [date, setDate, SetDateRange])

  const sfdate: any = (SetNewDate: Date) => {
    if (SetNewDate) {
      if (SetNewDate > date?.to!) {
        setDate({ from: date?.to, to: SetNewDate })
      } else {
        setDate({ from: SetNewDate, to: date?.to })
      }
    }
  }

  const stdate: any = (SetNewDate: Date) => {
    if (SetNewDate) {
      if (SetNewDate < date?.from!) {
        setDate({ to: date?.from, from: SetNewDate })
      } else {
        setDate({ from: date?.from, to: SetNewDate})
      }
  }
}

  const setdate = (date: Dispatch<SetStateAction<Date | undefined>>) => {}

  return (
    <div className='flex w-full items-center gap-3 '>
      <div className='flex flex-col space-y-1.5'>
        <Label className='text-foreground'>von:</Label>
        <DatePicker
          prompt='Start Datum'
          SetNewDate={sfdate}
          date={initialStartValue}
        />
      </div>
      <div className='flex flex-col space-y-1.5'>
        <Label className='text-foreground'>bis:</Label>
        <DatePicker prompt='End Datum' SetNewDate={stdate} date={initialEndValue} />
      </div>
    </div>
  )
}
