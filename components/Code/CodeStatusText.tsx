import React from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import CodeStatus from "../../utils/codeStatus";

export interface StatusProps {
  status: CodeStatus;
}

export const StatusText: React.FC<StatusProps> = ({ status }) => {
  return (
    <StyledStatus status={status}>
      {status.charAt(0) + status.slice(1).toLowerCase()}
    </StyledStatus>
  )
}

const theme = {
  'ACTIVE': colors.green,
  'HOLD': colors.orange,
  'INACTIVE': colors.red,
}

const StyledStatus = styled.div<StatusProps>`
  color: ${(props) => (theme[props.status])};
  text-transform: lowercase;
  text-transform: capitalize;
  font-size: 22px;
  line-height: 28px;
  font-weight: 700;
`