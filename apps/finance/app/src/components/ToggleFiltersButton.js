import React from 'react'
import styled from 'styled-components'
import { theme } from '@aragon/ui'

const StyledButton = styled.button`
  border: none;
  background: none;
  height: 16px;
  width: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  outline: none;

  &:focus {
    border: 2px solid ${theme.accent};
  }
  &:active {
    border: none;
  }
`

export default props => (
  <StyledButton {...props}>
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4211 2.66667H0.631579C0.273684 2.66667 0 2.37778 0 2C0 1.62222 0.273684 1.33333 0.631579 1.33333H10.4211C10.6947 0.555556 11.3895 0 12.2105 0C13.0316 0 13.7474 0.555556 14 1.33333H15.3684C15.7263 1.33333 16 1.62222 16 2C16 2.37778 15.7263 2.66667 15.3684 2.66667H14C13.7263 3.44444 13.0316 4 12.2105 4C11.3895 4 10.6737 3.44444 10.4211 2.66667ZM16 7C16 7.37778 15.7263 7.66667 15.3684 7.66667H5.57895C5.32632 8.44444 4.61053 9 3.78947 9C2.96842 9 2.27368 8.44444 2 7.66667H0.631579C0.273684 7.66667 0 7.37778 0 7C0 6.62222 0.273684 6.33333 0.631579 6.33333H2C2.25263 5.55556 2.96842 5 3.78947 5C4.61053 5 5.30526 5.55556 5.57895 6.33333H15.3684C15.7263 6.33333 16 6.62222 16 7ZM15.3684 11.3333H9.78947C9.53684 10.5556 8.82105 10 8 10C7.17895 10 6.48421 10.5556 6.21053 11.3333H0.631579C0.273684 11.3333 0 11.6222 0 12C0 12.3778 0.273684 12.6667 0.631579 12.6667H6.21053C6.46316 13.4444 7.17895 14 8 14C8.82105 14 9.51579 13.4444 9.78947 12.6667H15.3684C15.7263 12.6667 16 12.3778 16 12C16 11.6222 15.7263 11.3333 15.3684 11.3333Z"
        fill="black"
      />
    </svg>
  </StyledButton>
)
