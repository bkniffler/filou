import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M586.22 26.74C583.65 11.31 570.3 0 554.66 0H85.34C69.7 0 56.35 11.31 53.78 26.74l-53.33 320C-2.81 366.24 12.23 384 32.01 384H224v96h-40c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h272c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8h-40v-96h191.99c19.77 0 34.81-17.76 31.56-37.26l-53.33-320zM578.66 176h-138.6l-14.4-144h129l24 144zm-170.73 0H232.07l14.4-144h147.07l14.39 144zM85.34 32h129l-14.4 144H61.34l24-144zM56.01 208h140.73l-14.4 144H32.01l24-144zM384 480H256v-96h128v96zM214.48 352l14.4-144h182.25l14.4 144H214.48zm243.17 0l-14.4-144h140.74l24 144H457.65z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaSolarPanel';
export default styled(icon);