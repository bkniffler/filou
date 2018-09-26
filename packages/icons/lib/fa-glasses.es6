import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M574.21 280.58l-45.49-188c-5.38-21.55-19.62-40.05-39.09-50.73-19.47-10.66-42.66-12.8-63.81-5.77l-22.85 7.62c-4.19 1.4-6.46 5.93-5.06 10.12L402.97 69c1.4 4.19 5.93 6.46 10.12 5.06l21.79-7.27c10.1-3.37 21.16-3.95 31.23-.48 16.15 5.56 27.57 18.12 31.51 33.84l40.61 171.44c-22.35-7.63-53.24-15.06-89.57-15.06-37.34 0-80.26 8-125 31.48h-71.31c-44.74-23.48-87.66-31.49-125-31.48-36.33 0-67.22 7.44-89.58 15.07l40.57-171.24c3.36-13.44 11.99-24.44 24.29-30.9 12.24-6.43 26.88-6.51 39.99-2.14l20.28 6.77c4.19 1.4 8.72-.87 10.12-5.06l5.06-15.18c1.4-4.19-.87-8.72-5.06-10.12l-22.85-7.61c-21.09-7.06-44.31-4.95-63.81 5.75-19.45 10.68-33.7 29.18-39.11 50.91L1.8 280.58C.6 285.51 0 290.56 0 295.64v73.64C0 430.43 50.14 480 112 480h36.08c58.61 0 107.3-44.67 111.69-102.44l4.37-57.56h47.72l4.37 57.56C320.61 435.34 369.31 480 427.92 480H464c61.86 0 112-49.57 112-110.72v-73.65c0-5.07-.6-10.12-1.79-15.05zm-346.35 94.56C224.76 416 189.72 448 148.08 448H112c-44.11 0-80-35.31-80-78.72v-61.3c18.79-7.97 53.21-19.46 95.37-19.46 36.35 0 71.64 8.44 105.16 25.13l-4.67 61.49zM544 369.28c0 43.41-35.89 78.72-80 78.72h-36.08c-41.63 0-76.68-32-79.78-72.86l-4.67-61.49c33.53-16.68 68.83-25.13 105.19-25.13 42.16 0 76.56 11.49 95.34 19.46v61.3z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaGlasses';
export default styled(icon);