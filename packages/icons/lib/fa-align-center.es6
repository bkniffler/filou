import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M352 52v24a6 6 0 0 1-6 6H102a6 6 0 0 1-6-6V52a6 6 0 0 1 6-6h244a6 6 0 0 1 6 6zM6 210h436a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6H6a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6zm0 256h436a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6H6a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6zm340-164H102a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6h244a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaAlignCenter';
export default styled(icon);