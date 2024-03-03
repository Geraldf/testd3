import * as React from 'react'

import { add, addDays, eachMonthOfInterval, sub } from 'date-fns'
import { Calendar } from '../ui/calendar'
import { DateRange } from 'react-day-picker'

const today = new Date()
const startmonth = sub(today, { months: 6 })
const endmonth = add(today, { months: 6 })
const months = eachMonthOfInterval({
  start: startmonth,
  end: endmonth
})
type Props = {
  SetStartDate: React.Dispatch<React.SetStateAction<Date | undefined>>
  SetEndDate: React.Dispatch<React.SetStateAction<Date | undefined>>
  initStart?: Date
  initEnd?: Date
}
export function MonthPicker(props: Props) {
  const { SetStartDate, SetEndDate, initStart, initEnd } = props
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: initStart || new Date(2022, 0, 20),
    to: initEnd || addDays(new Date(2022, 0, 20), 20)
  })

  React.useEffect(() => {
    SetStartDate(date?.from)
    SetEndDate(date?.to)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date])

  return (
    <div className='flex flex-row gap-4'>
      <Calendar
        initialFocus
        mode='range'
        defaultMonth={date?.from}
        selected={date}
        onSelect={setDate}
        numberOfMonths={2}
      />
    </div>
  )
}
