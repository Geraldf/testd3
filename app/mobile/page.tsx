'use client'
import { DatePicker } from '@/components/datePicker/DatePicker'
import { MonthPicker } from '@/components/datePicker/MonthPicker'
import { RangePicker } from '@/components/datePicker/RangePicker'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { addDays } from 'date-fns'
import * as React from 'react'
import { Dispatch, SetStateAction } from 'react'
import { DateRange } from 'react-day-picker'

type Props = {}

export default function Page({}: Props) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 20)
  })

  const SetStartDate = (startdate: any) => {
    if (startdate) {
      setDate({ from: startdate, to: date?.to })
    }
  }

  const SetEndDate = (enddate: any) => {
    if (enddate) {
      setDate({ from: date?.from, to: enddate })
    }
  }

  React.useEffect(() => {
    console.log(date)
  }, [date])

  return (
    <div className='flex flex-col gap-4'>
      <Card className='w-min'>
        <CardHeader className='flex flex-col  p-4'>
          <CardTitle>Selektiertes Datum</CardTitle>
        </CardHeader>
        <CardContent>
          <RangePicker
            initialStartValue={date?.from}
            initialEndValue={date?.to}
            SetDateRange={setDate}
          />
        </CardContent>
      </Card>
      <MonthPicker SetStartDate={SetStartDate} SetEndDate={SetEndDate} initStart={date?.from} initEnd={date?.to}/>
    </div>
  )
}
