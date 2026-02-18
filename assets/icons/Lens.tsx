import * as React from 'react';
import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const Lens = ({ ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <path
      fill="#5d5d5d"
      d="M10.417 9.167h-.659l-.233-.225a5.4 5.4 0 0 0 1.308-3.525 5.416 5.416 0 1 0-5.416 5.416 5.4 5.4 0 0 0 3.525-1.308l.225.233v.659l4.166 4.158 1.242-1.242zm-5 0a3.745 3.745 0 0 1-3.75-3.75 3.745 3.745 0 0 1 3.75-3.75 3.745 3.745 0 0 1 3.75 3.75 3.745 3.745 0 0 1-3.75 3.75"
    />
  </svg>
);

export default Lens;
