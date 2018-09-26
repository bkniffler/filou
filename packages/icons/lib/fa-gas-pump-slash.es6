import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M637 485.25L23 1.75A7.995 7.995 0 0 0 11.76 3l-10 12.51a7.995 7.995 0 0 0 1.25 11.24l614 483.49a7.995 7.995 0 0 0 11.24-1.25l10-12.51c2.76-3.44 2.2-8.47-1.25-11.23zM480 78.63V160c0 26.51 21.49 48 48 48h16v163.28l30.72 24.19c.69-3.75 1.28-7.53 1.28-11.48V142.63c0-8.49-3.37-16.62-9.37-22.63l-93.66-93.66c-3.12-3.12-8.19-3.12-11.31 0l-11.31 11.31c-3.12 3.12-3.12 8.19 0 11.31L480 78.63zm32 32l32 32V176h-16c-8.83 0-16-7.17-16-16v-49.37zM160 32h160c17.64 0 32 14.36 32 32v156.09l32 25.2V64c0-35.35-28.65-64-64-64H160c-21.78 0-40.96 10.93-52.52 27.55l25.62 20.18C138.73 38.5 148.43 32 160 32zm248 448h-24V367.5l-32-25.2V480H128V165.91l-32-25.2V480H72c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h336c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaGasPumpSlash';
export default styled(icon);