import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 352c0 17.6-14.4 32-32 32H293.3l-8.5 6.4L192 460v-76H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288zM331.8 237.3C313 259.4 285.4 272 256 272s-57-12.6-75.8-34.6c-5.7-6.7-15.8-7.4-22.5-1.8-6.8 5.8-7.5 15.8-1.8 22.6C180.7 287.3 217.2 304 256 304s75.3-16.7 100.2-45.9c5.8-6.7 4.9-16.8-1.8-22.6-6.7-5.7-16.8-4.9-22.6 1.8zM192 184c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24zm128 0c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaCommentAltSmile';
export default styled(icon);