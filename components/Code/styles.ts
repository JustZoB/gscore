import styled from "styled-components";
import colors from "../../utils/colors";

export const CodeContainer = styled.div`
  display: flex;
  background-color: ${colors.darkerGray};
  border-radius: 12px;
  padding: 24px 100px 24px 32px;
  flex-direction: row;
`

export interface CodeItemProps {
  full?: boolean;
}

export const CodeItem = styled.div<CodeItemProps>`
  display: flex;
  flex-direction: column;
  flex: ${(props) => (props.full ? 1 : 'unset')};;

  &:not(:last-child) {
    margin-right: 32px;
  }
`

export const CodeItemHeader = styled.p`
  display: flex;
  flex-direction: column;
  height: 30px;
  font-size: 16px;
  line-height: 18px;
  font-weight: 700;
  color: ${colors.gray};
`

export const CodeItemContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`
