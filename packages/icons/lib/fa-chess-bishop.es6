import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.739 304c0 53.781 22.893 75.784 58.435 86.03V448h183.652v-57.967c35.548-10.245 58.446-32.247 58.446-86.033 0-71.874-49.427-170.647-100.326-215.757 13.149-8.562 21.85-23.382 21.85-40.243 0-26.51-21.49-48-48-48H136c-26.51 0-48 21.49-48 48 0 16.919 8.761 31.782 21.986 40.33C59.126 133.479 9.739 232.172 9.739 304zm232.224-120.59l-97.034 97.034a6 6 0 0 0 0 8.485l14.142 14.142a6 6 0 0 0 8.485 0l89.106-89.106c5.455 12.866 21.61 52.824 21.61 90.035 0 50.257-20.602 51.047-58.446 61.953V416H100.174v-50.047c-37.805-10.9-58.435-11.61-58.435-61.953 0-85.783 81.566-208 118.266-208 12.854 0 48.279 25.038 81.958 87.41zM136 64c-8.822 0-16-7.178-16-16s7.178-16 16-16h47.795c8.822 0 16 7.178 16 16s-7.178 16-16 16H136zm172 448H12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h296c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaChessBishop';
export default styled(icon);