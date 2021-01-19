// @flow
import * as React from 'react';

type Props = {
  type: string,
  height: string,
  width: string,
  color: string,
  innerHeight?: string,
  innerWidth?: string,
};

export default function ShapeContainer (props: Props): React.Node {
  return (
    <>
      {props.type === 'round' && (
        <svg height={props.width} width={props.width}>
          <circle cx="100" cy="100" r="80" stroke={props.color} fill={props.color} />
        </svg>
      )}
      {props.type === 'square' && (
        <svg height={props.width} width={props.width}>
          <rect width={props.innerWidth} height={props.innerWidth} style={{ fill: props.color, stroke: props.color }} />
        </svg>
      )}
      {props.type === "oval" && (
        <svg height={props.height} width={props.width}>
          <ellipse cx="100" cy="50" rx="100" ry="50" style={{ fill: props.color, stroke: props.color }} />
        </svg>
      )}
      {props.type === "triangle" && (
        <svg height={props.height} width={props.width}>
          <path d="M 100,5 195,197.5 5,197.5 z" fill={props.color} />
        </svg>
      )}
      {props.type === "rectangle" && (
        <svg height={props.height} width={props.width}>
          <rect width={props.innerWidth} height={props.innerHeight} style={{ fill: props.color, stroke: props.color }} />
        </svg>
      )}
    </>
  );
}
