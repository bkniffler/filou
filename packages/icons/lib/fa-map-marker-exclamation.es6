import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 0C86.4 0 0 86.4 0 192c0 76.8 25.6 99.2 172.8 310.4 4.8 6.4 12 9.6 19.2 9.6s14.4-3.2 19.2-9.6C358.4 291.2 384 268.8 384 192 384 86.4 297.6 0 192 0zm.01 474c-19.67-28.17-37.09-52.85-52.49-74.69C42.64 261.97 32 245.11 32 192c0-88.22 71.78-160 160-160s160 71.78 160 160c0 53.11-10.64 69.97-107.52 207.31-15.52 22.01-33.09 46.92-52.47 74.69zm-8.49-234h16.97a8 8 0 0 0 7.98-7.5l7-112c.29-4.61-3.37-8.5-7.98-8.5h-30.97c-4.61 0-8.27 3.89-7.98 8.5l7 112c.25 4.21 3.75 7.5 7.98 7.5zm8.48 24c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaMapMarkerExclamation';
export default styled(icon);