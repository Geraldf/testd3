'use client'

import { IconTypeProps } from '@/types/nav'

export const CircleOff = (props: IconTypeProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.width}
    height={props.height}
    viewBox={`0 0 ${props.width * 1.5} ${props.height * 1.5}`}
    fill='none'
    stroke='currentColor'
    strokeWidth='1'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='lucide lucide-book-open-check'
  >
    <path d='m2 2 20 20' />
    <path d='M8.35 2.69A10 10 0 0 1 21.3 15.65' />
    <path d='M19.08 19.08A10 10 0 1 1 4.92 4.92' />
  </svg>
)

export const MobileIcon = (props: IconTypeProps) => (
  <svg
    fill='#000000'
    width={props.width}
    height={props.height}
    version='1.1'
    id='Capa_1'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 27.442 27.442'
  >
    <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
    <g
      id='SVGRepo_tracerCarrier'
      strokeLinecap='round'
      strokeLinejoin='round'
    ></g>
    <g id='SVGRepo_iconCarrier'>
      {' '}
      <g>
        {' '}
        <path d='M19.494,0H7.948C6.843,0,5.951,0.896,5.951,1.999v23.446c0,1.102,0.892,1.997,1.997,1.997h11.546 c1.103,0,1.997-0.895,1.997-1.997V1.999C21.491,0.896,20.597,0,19.494,0z M10.872,1.214h5.7c0.144,0,0.261,0.215,0.261,0.481 s-0.117,0.482-0.261,0.482h-5.7c-0.145,0-0.26-0.216-0.26-0.482C10.612,1.429,10.727,1.214,10.872,1.214z M13.722,25.469 c-0.703,0-1.275-0.572-1.275-1.276s0.572-1.274,1.275-1.274c0.701,0,1.273,0.57,1.273,1.274S14.423,25.469,13.722,25.469z M19.995,21.1H7.448V3.373h12.547V21.1z'></path>{' '}
        <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{' '}
        <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{' '}
      </g>{' '}
    </g>
  </svg>
)

export const HomeIcon = (props: IconTypeProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.width}
    height={props.height}
    viewBox={`0 0 ${props.width * 1.5} ${props.height * 1.5}`}
    fill='none'
    stroke='currentColor'
    strokeWidth='1'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='lucide lucide-book-open-check'
  >
    <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
    <polyline points='9 22 9 12 15 12 15 22' />
  </svg>
)

export const TestIcon = (props: IconTypeProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.width}
    height={props.height}
    viewBox={`0 0 ${props.width * 1.5} ${props.height * 1.5}`}
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='lucide lucide-book-open-check'
  >
    <path d='M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z' />
    <path d='m16 12 2 2 4-4' />
    <path d='M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3' />
  </svg>
)

export const CloseIcon = (props: IconTypeProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.width}
    height={props.height}
    viewBox={`0 0 ${props.width * 1.5} ${props.height * 1.5}`}
    fill='none'
    stroke='currentColor'
    stroke-width='2'
    stroke-linecap='round'
    stroke-linejoin='round'
    className='lucide lucide-x-circle'
  >
    <circle cx='12' cy='12' r='10' />
    <path d='m15 9-6 6' />
    <path d='m9 9 6 6' />
  </svg>
)
