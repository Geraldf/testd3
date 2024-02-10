export interface ICircles {
  diameter: number
  fill: string
  x: number
  y: number
}

export const SVGCircles = ({ diameter, fill, x, y }: ICircles) => {
  return (
    <g >
      <circle r={diameter } cx={x} cy={y} fill={fill}>
      <animate attributeName="cx" from="1" to={x} dur="1s"  fill="freeze"></animate> 
      <animate attributeName="cy" from="1" to={y} dur="1s"  fill="freeze"></animate> 
      </circle>
    </g>
  )
}
