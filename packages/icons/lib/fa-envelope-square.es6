import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm16 400c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h352c8.822 0 16 7.178 16 16v352zm-64-304H96c-17.673 0-32 14.327-32 32v192c0 17.673 14.327 32 32 32h256c17.673 0 32-14.327 32-32V160c0-17.673-14.327-32-32-32zm0 32v33.855c-14.136 11.628-36.566 29.664-82.117 65.821C259.426 268.015 238.748 288 224.256 288l-.256-.002-.256.002c-14.492 0-35.17-19.984-45.628-28.324-45.544-36.152-67.978-54.192-82.117-65.822V160H352zM96 352V235.092c14.109 11.367 33.624 26.948 62.221 49.648 13.777 11.01 37.902 35.26 65.523 35.26l.253-.001.258.001c27.529 0 51.392-23.975 65.541-35.274 28.583-22.689 48.099-38.27 62.203-49.634V352H96z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaEnvelopeSquare';
export default styled(icon);