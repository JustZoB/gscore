import styled from "styled-components";
import colors from "../../utils/colors";

export interface ItemProps {
  active: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const SettingsNavbarItem: React.FC<ItemProps> = ({ children, active, onClick }) => {
  return (
    <SettingsNavbarItemContainer onClick={onClick} active={active}>
      <ItemText active={active}>{children}</ItemText>
    </SettingsNavbarItemContainer>
  )
}

export const SettingsNavbarItemContainer = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  cursor: ${(props) => (!props.active ? 'pointer' : 'defualt')};
  border-bottom: 2px solid ${(props) => (!props.active ? colors.darkGray : colors.lightRed)};
  margin-bottom: -2px;
`

export const ItemText = styled.p<ItemProps>`
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
  color: ${(props) => (!props.active ? colors.darkGray : colors.lightRed)};
`
