'use client'
import * as React from 'react'
import GetDateRange from '../../components/datePicker/GetDateRange';
import { DateRange } from 'react-day-picker';

type Props = {}

export default function Page({}: Props) {
  const [date, setDate] = React.useState<DateRange | undefined>()
  return(
    <GetDateRange SetDateRange={setDate}/>
  )
}
