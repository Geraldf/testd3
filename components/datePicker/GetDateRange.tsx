import React from 'react'
import { Card } from '@/components/ui/card'
import { CardHeader } from '@/components/ui/card'
import { CardContent } from '@/components/ui/card'
import { CardTitle } from '@/components/ui/card'
import { RangePicker } from '@/components/datePicker/RangePicker'
import { MonthPicker } from '@/components/datePicker/MonthPicker'
import { addDays, intervalToDuration } from 'date-fns'
import { DateRange } from 'react-day-picker'

type Props = {
  SetDateRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>
}

export default function GetDateRange(props: Props) {
  const { SetDateRange } = props
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 20)
  })

  React.useEffect(() => {
    SetDateRange(date)
  }, [date])

  return (
    <div className='flex flex-col gap-4'>
      <Card>
        <CardHeader className='flex flex-col  p-4 space-x-0'>
          <CardTitle>Selektiertes Datum</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-row w-min gap-3'>
            <RangePicker
              initialStartValue={date?.from}
              initialEndValue={date?.to}
              SetDateRange={setDate}
            />
            <div >Dauer: {intervalToDuration({ start: date.from!, end: date!.to! }).days} Tage</div>
          </div>
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
