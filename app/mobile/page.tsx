'use client'
import * as React from 'react'
import GetDateRange from '../../components/datePicker/GetDateRange'
import { DateRange } from 'react-day-picker'
import AdressForm from '@/components/FormComponents/AdressForm'

type Props = {}

export default function Page({}: Props) {
  const [date, setDate] = React.useState<DateRange | undefined>()
  return (
    <div className="flex flex-row gap-8">
      <GetDateRange SetDateRange={setDate} />
      <AdressForm />
    </div>
  )
}
