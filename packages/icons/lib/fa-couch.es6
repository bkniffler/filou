import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M576 193.9v-33.7c0-53.1-43-96.2-96-96.2H160c-53 0-96 43.1-96 96.2v33.7c-36.5 7.5-64 39.8-64 78.6 0 25.1 12.1 48.8 32 63.8v79.6c0 17.7 14.3 32.1 32 32.1h64c17.3 0 31.3-14.7 31.8-32h320.4c.5 17.3 14.5 32 31.8 32h64c17.7 0 32-14.4 32-32.1v-79.6c19.9-15.1 32-38.7 32-63.8 0-38.7-27.5-71.1-64-78.6zm-448 222H64v-97.4c-17.1-10-32-21.1-32-46 0-26.5 21.5-48.1 48-48.1h32c8.8 0 16 7.2 16 16v175.5zM480 384H160v-95.5h320V384zm0-143.6V256H160v-15.6c0-26.5-21.5-48.1-48-48.1H96v-32.1c0-35.4 28.7-64.1 64-64.1h320c35.3 0 64 28.8 64 64.1v32.1h-16c-26.5 0-48 21.6-48 48.1zm96 78.1v97.4h-64V240.4c0-8.8 7.2-16 16-16h32c26.5 0 48 21.6 48 48.1 0 23.9-13.9 35.4-32 46z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaCouch';
export default styled(icon);