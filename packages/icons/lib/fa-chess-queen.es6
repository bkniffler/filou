import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M436 512H76c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zM255.579 32c-13.234 0-24 10.766-24 24s10.766 24 24 24 24-10.766 24-24-10.766-24-24-24m0-32c30.928 0 56 25.072 56 56s-25.072 56-56 56-56-25.072-56-56 25.072-56 56-56zm81.579 160h-8.319c-4.533 9.593-24.68 49.231-72.839 49.231-48.147 0-68.317-39.664-72.839-49.231h-8.315c-1.485 21.883-7.446 69.206-62.846 69.206-26.644 0-46.348-15.694-61.685-37.576l-6.854 3.617L133.507 416h244.986l90.046-220.753-6.777-3.577c-9.187 13.212-29.262 37.536-61.762 37.536-55.422 0-61.374-47.614-62.842-69.206m19.161-32c6.494 0 11.812 5.172 11.995 11.664 1.062 37.738 2.973 57.542 31.686 57.542 21.318 0 35.449-22.285 44.065-37.802 3.161-5.693 10.305-7.82 16.082-4.77l39.357 20.773a12 12 0 0 1 5.51 15.145L400 448H112L6.986 190.552a12 12 0 0 1 5.51-15.145l39.179-20.679c6.482-3.421 13.147-.165 15.899 4.453 10.608 17.8 23.735 38.025 44.425 38.025 28.753 0 30.635-19.898 31.688-57.539.181-6.493 5.5-11.667 11.995-11.667h41.005c5.175 0 9.754 3.328 11.388 8.238 8.89 26.709 26.073 40.992 47.925 40.992s39.034-14.283 47.925-40.992c1.634-4.911 6.213-8.238 11.388-8.238h41.006z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaChessQueen';
export default styled(icon);