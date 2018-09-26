import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M637 485.25L23 1.75A7.995 7.995 0 0 0 11.76 3l-10 12.51a7.995 7.995 0 0 0 1.25 11.24l614 483.49a7.995 7.995 0 0 0 11.24-1.25l10-12.51c2.76-3.44 2.2-8.47-1.25-11.23zM320 32c88.22 0 160 71.78 160 160 0 34.67-4.71 54.09-34.81 101.47l25.32 19.94C503.87 261.25 512 235.24 512 192 512 86.4 425.6 0 320 0c-61.72 0-116.73 29.65-151.92 75.27l25.36 19.97C222.71 57.06 268.29 32 320 32zm73.95 221.12C407.56 236.58 416 215.54 416 192c0-53.76-42.24-96-96-96-31.89 0-59.46 15.08-76.83 38.39l25.11 19.77C279.81 138.27 298.43 128 320 128c35.89 0 64 28.11 64 64 0 15.99-5.8 30.24-15.16 41.35l25.11 19.77zm-21.47 146.19c-15.52 22.01-33.09 46.91-52.47 74.69-19.67-28.17-37.09-52.85-52.49-74.69C170.64 261.97 160 245.11 160 192c0-.28.08-.54.08-.82l-30.3-23.86c-1.05 8.1-1.78 16.3-1.78 24.68 0 76.8 25.6 99.2 172.8 310.4 4.8 6.4 12 9.6 19.2 9.6s14.4-3.2 19.2-9.6c30.77-44.15 55.96-79.69 76.98-109.56L391 373.01c-5.81 8.28-11.93 16.96-18.52 26.3z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaMapMarkerAltSlash';
export default styled(icon);