import React from 'react'
import { Card } from '@/components/ui/card'
import { CardHeader } from '@/components/ui/card'
import { CardContent } from '@/components/ui/card'
import { CardTitle } from '@/components/ui/card'
import { RangePicker } from '@/components/datePicker/RangePicker'
import { MonthPicker } from '@/components/datePicker/MonthPicker'
import { addDays } from 'date-fns'
import { DateRange } from 'react-day-picker'

type Props = {}

export default function GetDateRange({}: Props) {
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
      <Card className='w-min'>
        <CardContent>
          <MonthPicker
            SetDate={setDate}
            initStart={date?.from}
            initEnd={date?.to}
          />
        </CardContent>
      </Card>
    </div>
  )
}
