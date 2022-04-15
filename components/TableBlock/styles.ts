import styled from "styled-components";
import colors from "../../utils/colors";

interface ContainerProps {
  active?: boolean,
  theme?: 'dark' | 'light',
}

export const TableBlockContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 48px 0;
  background-color: ${(props) => (props.theme === 'dark' ? colors.darkerGray : colors.darkGray)};
  border-radius: 12px;
  margin-bottom: 24px;
  opacity: ${(props) => (props.active === false ? 0.6 : 1)};
  transition: 0.3s;
`

export const TableBlockHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px 20px;
  border-bottom: 1px solid ${colors.gray};
`

export const TableBlockHeaderText = styled.p`
  color: ${colors.white};
  font-size: 24px;
  line-height: 34px;
  font-weight: 700;
  margin-bottom: 12px;
`

export const TableBlockContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 32px 0;
`

export const TableBlockContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

export const TableBlockContentItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TableBlockContentText = styled.p`
  color: ${colors.white};
  font-size: 24px;
  line-height: 34px;
  margin-bottom: 12px;
`

export const TableBlockContentDate = styled.p`
  color: ${colors.gray};
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  margin-bottom: 12px;
`
