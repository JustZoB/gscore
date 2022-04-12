import styled from "styled-components";
import colors from "../../utils/colors";

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const FormsContainer = styled.div`
  display: flex;
  
  & > * {
    width: calc(45% - 30px);

    &:not(:last-child) {
      margin-right: 60px;
    }
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`
