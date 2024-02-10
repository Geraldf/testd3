export interface IText {
  t: string
  x: number
  y: number
  fontSize?: string
}

export const SVGText = ({ t, x, y, fontSize }: IText) => {
  return (
    <text x={x} font-size={fontSize} y={y}>
      {t}
    </text>
  )
}
