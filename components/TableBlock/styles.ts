import styled from "styled-components";
import colors from "../../utils/colors";

export const TableBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 0;
  background-color: ${colors.darkerGray};
  border-radius: 12px;
  margin-bottom: 24px;
  
`
export const TableBlockHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px 32px;
  border-bottom: 1px solid ${colors.gray};
`

export const TableBlockHeaderText = styled.p`
  color: ${colors.white};
  font-size: 24px;
  line-height: 34px;
  font-weight: 700;
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
    margin-bottom: 10px;
  }
`

export const TableBlockContentText = styled.p`
  color: ${colors.white};
  font-size: 24px;
  line-height: 34px;
`
