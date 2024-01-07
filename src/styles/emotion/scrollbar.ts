import { css } from '@emotion/react';

export const scrollbar = css`
  &::-webkit-scrollbar {
    background-color: #f1f1f1 !important;
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888 !important;
    border-radius: 5px !important;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555 !important;
  }
`;
