import styled from "styled-components";
import colors from "../../utils/colors";

export const CodeContainer = styled.div`
  position: relative;
  display: flex;
  background-color: ${colors.darkerGray};
  border-radius: 12px;
  padding: 24px 100px 24px 32px;
  flex-direction: row;

  @media screen and (max-width: 1199.92px) {
    padding: 20px 60px 20px 24px;
  }
  @media screen and (max-width: 767.92px) {
    flex-direction: column;
    padding: 32px 20px 16px;
  }
`

export interface CodeItemProps {
  full?: boolean;
  status?: boolean;
}

export const CodeItem = styled.div<CodeItemProps>`
  display: flex;
  flex-direction: column;
  flex: ${(props) => (props.full ? 1 : 'unset')};

  @media screen and (max-width: 767.92px) {
    position: ${(props) => (props.status ? 'absolute' : 'unset')};
    left: ${(props) => (props.status ? '55px' : 'unset')};
    padding: ${(props) => (props.status ? '5px' : 'unset')};
  }

  &:not(:last-child) {
    margin-right: 32px;

    @media screen and (max-width: 1199.92px) {
      margin-right: 24px;
    }
    @media screen and (max-width: 767.92px) {
      margin-right: 0;
      margin-bottom: 16px;
    }
  }
`

export interface CodeItemHeaderProps {
  hideOnMobile?: boolean;
}

export const CodeItemHeader = styled.p<CodeItemHeaderProps>`
  display: flex;
  flex-direction: column;
  height: 30px;
  font-size: 16px;
  line-height: 18px;
  font-weight: 700;
  color: ${colors.gray};

  @media screen and (max-width: 767.92px) {
    display: ${(props) => (props.hideOnMobile ? 'none' : 'flex')};;
  }
  
`

export const CodeItemContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767.92px) {
    justify-content: flex-start;
  }
`

export const DomainFieldContainer = styled.div`
  position: relative;
  flex: 3;
  margin-right: 10px;

  @media screen and (max-width: 767.92px) {
    margin-right: 0;
  }
`

export const ButtonContainer = styled.div`
  @media screen and (max-width: 767.92px) {
    position: absolute;
    right: 20px;
    top: 20px;
  }
`

export const CodeErrorMessageContainer = styled.div`
  position: absolute;
`
