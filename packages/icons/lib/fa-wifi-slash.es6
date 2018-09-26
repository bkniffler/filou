import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M23 1.75A7.995 7.995 0 0 0 11.76 3l-10 12.51a7.995 7.995 0 0 0 1.25 11.24l614 483.49a7.995 7.995 0 0 0 11.24-1.25l10-12.51a7.995 7.995 0 0 0-1.25-11.24L23 1.75zm590.98 179.52c4.73 4.48 12.19 4.36 16.8-.26l5.69-5.69c4.81-4.82 4.68-12.64-.26-17.33C503.59 32.18 314.12.57 152.91 63.32l30.16 23.75c145.84-49.2 312.71-17.88 430.91 94.2zM361.16 227.3c51.76 7.71 101.77 29.8 143.32 66.71 4.83 4.29 12.19 4.01 16.65-.67l5.53-5.79c4.67-4.89 4.4-12.71-.65-17.21-59.58-53.08-134.66-79.04-209.49-78.2l44.64 35.16zm-36.94 93.13c-1.43-.08-2.77-.43-4.22-.43-44.18 0-80 35.82-80 80s35.83 80 80 80c44.19 0 80-35.84 80-80 0-7.98-1.53-15.54-3.7-22.82l-72.08-56.75zM320 448c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zM113.99 270.35c-5.05 4.5-5.32 12.31-.65 17.21l5.53 5.79c4.46 4.68 11.82 4.96 16.66.67a276.177 276.177 0 0 1 88.1-52.8l-28.72-22.61c-28.86 12.72-56.27 29.78-80.92 51.74zM3.79 158c-4.94 4.69-5.08 12.51-.26 17.33l5.69 5.69c4.61 4.61 12.06 4.74 16.8.26 19.09-18.1 39.54-33.86 60.84-47.76l-26.37-20.76C40.78 126.28 21.66 141.05 3.79 158z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaWifiSlash';
export default styled(icon);