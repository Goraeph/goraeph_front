import { css } from '@emotion/react';

export const shadow = css`
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow:
      0 3px 5px rgba(0, 0, 0, 0.25),
      0 3px 10px hsla(0, 0%, 0%, 0.22);
  }
`;
