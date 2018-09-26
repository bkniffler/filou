import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M168 224h136v32H200c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h104v32h-64c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48v-16h64v16c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48h-64v-32h104c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H336v-32h136c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H336v-32h104c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H336v-24c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24H200c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h104v32H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm72 160c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm160-32c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zM632 32c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8H8C3.6 0 0 3.6 0 8v16c0 4.4 3.6 8 8 8h56v448H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h624c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-56V32h56zm-88 448H96V32h448v448z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaXRay';
export default styled(icon);