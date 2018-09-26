import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M344 288h-56v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56h-56c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h56v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h56c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm120-160H352V56c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24v72H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zM192 64h128v64H192V64zm288 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v288z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaBriefcaseMedical';
export default styled(icon);