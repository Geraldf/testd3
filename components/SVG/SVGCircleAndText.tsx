export interface ICirclesAndText {
  x: number
  y: number
  t: string
  key?: string
}

export const CirclesAndText = ({ y, x, t, key }: ICirclesAndText) => {
  return (
    <g key={key}
      >
      <circle r={5} fill='gray' />
      <text x={8} y={3} fontSize={'10px'}>
        {t}
      </text>

      <animateTransform
        attributeName='transform'
        begin='0s'
        dur='0.5s'
        type='translate'
        from='0 0'
        to={`${y} ${x}`}
        fill='freeze'
      />
    </g>
  )
}
