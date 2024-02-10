"use client";

import * as d3 from "d3";



const grid = () => {
  return (
    <g id="grid" className="stroke-slate-300">
      {d3.ticks(0, 300, 20).map(x => (
        <line key={x} x1={x} x2={x} y1={0} y2={300} />
      ))}
      {d3.ticks(0, 300, 20).map(y => (
        <line key={y} x1={0} x2={300} y1={y} y2={y} />
      ))}
    </g>
  );
};

export default grid;
