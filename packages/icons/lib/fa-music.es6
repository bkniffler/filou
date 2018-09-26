import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 32.01C512 13.74 497.68 0 481.45 0c-3.04 0-6.15.48-9.25 1.51l-290.78 96C168.71 101.71 160 114 160 128v244.76C142.99 359.99 120.7 352 96 352c-53.02 0-96 35.82-96 80s42.98 80 96 80 96-35.82 96-80V256l288-96v148.76C462.99 295.99 440.7 288 416 288c-53.02 0-96 35.82-96 80s42.98 80 96 80 96-35.82 96-80c0-.03-.01-.05-.01-.08L512 32.01zM96 480c-34.69 0-64-21.98-64-48s29.31-48 64-48 64 21.98 64 48-29.31 48-64 48zm384-353.73l-288 96V128h-.55v-.11L480 32.63v93.64zM416 416c-34.69 0-64-21.98-64-48s29.31-48 64-48 64 21.98 64 48-29.31 48-64 48z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaMusic';
export default styled(icon);