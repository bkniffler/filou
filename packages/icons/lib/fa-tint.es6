import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M205.22 22.09C201.21 7.53 188.61 0 175.97 0c-12.35 0-24.74 7.2-29.19 22.09C100.01 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 480c-79.4 0-144-65.54-144-146.09 0-48.36 23-81.32 54.84-126.94 29.18-41.81 65.34-93.63 89.18-170.91 23.83 77.52 60.06 129.31 89.3 171.08C297.06 252.52 320 285.3 320 333.91 320 414.46 255.4 480 176 480zm0-64c-44.12 0-80-35.89-80-80 0-8.84-7.16-16-16-16s-16 7.16-16 16c0 61.75 50.25 112 112 112 8.84 0 16-7.16 16-16s-7.16-16-16-16z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaTint';
export default styled(icon);