import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 352c0 17.6-14.4 32-32 32H293.3l-8.5 6.4L192 460v-76H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288zM329.5 145.8l-11.3-11.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3L256 185.4l-50.9-50.9c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l50.9 50.9-50.9 50.9c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l50.9-50.9 50.9 50.9c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l11.3-11.3c3.1-3.1 3.1-8.2 0-11.3l-51-50.9 50.9-50.9c3.2-3.1 3.2-8.2 0-11.3z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaCommentAltTimes';
export default styled(icon);