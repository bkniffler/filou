import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M333.525 384l23 32H48c-26.51 0-48-21.49-48-48V144c0-26.51 21.49-48 48-48h78.525l23 32H48c-8.822 0-16 7.177-16 16v224c0 8.823 7.178 16 16 16h285.525zM640 184v144c0 13.255-10.745 24-24 24h-8v16c0 26.51-21.49 48-48 48H454.363l52.216 72.648c3.87 5.384 2.642 12.884-2.741 16.754l-6.04 4.341a11.95 11.95 0 0 1-6.996 2.257 11.988 11.988 0 0 1-9.758-4.999L133.421 23.352c-3.87-5.384-2.642-12.884 2.741-16.754l6.04-4.341A11.95 11.95 0 0 1 149.198 0c3.734 0 7.413 1.736 9.758 4.999L224.363 96H560c26.51 0 48 21.49 48 48v16h8c13.255 0 24 10.745 24 24zm-32 8h-32v-48c0-8.823-7.178-16-16-16H247.363l184 256H560c8.822 0 16-7.177 16-16v-48h32V192z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaBatterySlash';
export default styled(icon);