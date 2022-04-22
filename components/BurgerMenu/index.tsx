import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.png';
import arrow from '../../public/arrow.svg';
import { CloseIcon } from "./CloseIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { logOut } from "../../store/authorization/reducers";
import { clearAfterLogOut } from "../../store/subscribes/reducers";
import { closeBurgerMenu } from "../../store/burgerMenu/reducers";
import SettingsSVG from "../../public/svg/SettingsSVG";
import LogOutSCG from "../../public/svg/LogOutSCG";

export const BurgerMenu: React.FC = () => {
  const dispatch = useDispatch();
  const authorization = useSelector((state: RootState) => state.authorizationSlice);
  const burgerMenuSlice = useSelector((state: RootState) => state.burgerMenuSlice);
  const [dropDownActive, setDropDownActive] = useState<boolean>(false);

  const handleLogOut: React.MouseEventHandler<HTMLDivElement> = (e) => {
    dispatch(logOut())
    dispatch(clearAfterLogOut())
  }

  return (
    <BurgerMenuContainer active={burgerMenuSlice.isBurgerMenuShown}>
      <BurgerMenuHeader>
        <CloseIcon onClick={() => dispatch(closeBurgerMenu())}/>
        <Link href="/" passHref>
          <a>
            <Image
              src={logo}
              alt='Logo'
              layout="fixed"
              width={130}
              height={32}
            />
          </a>
        </Link>
      </BurgerMenuHeader>

      <BurgerMenuLinksContainer>
        <Link href="/my-subscriptions" passHref>
          <a>
            <BurgerMenuLinkContainer>
              <BurgerMenuLinkText>My subscriptions</BurgerMenuLinkText>
            </BurgerMenuLinkContainer>
          </a>
        </Link>

        <BurgerMenuLinkContainer onClick={() => setDropDownActive(!dropDownActive)}>
          <BurgerMenuDropDownButton>
            <BurgerMenuLinkText>{authorization.user.user.username}</BurgerMenuLinkText>
            <DropDownArrow active={dropDownActive}>
              <Image
                src={arrow}
                alt='Down arrow'
                layout="fixed"
              />
            </DropDownArrow>
          </BurgerMenuDropDownButton>

          {dropDownActive &&
            <BurgerMenuDropDownMenuContainer>
              <Link href="/settings/update-data-form" passHref>
                <a>
                  <BurgerMenuDropDownMenuItem>
                    <SettingsSVG color={colors.gray} />
                    <BurgerMenuDropDownMenuText>Settings</BurgerMenuDropDownMenuText>
                  </BurgerMenuDropDownMenuItem>
                </a>
              </Link>

              <BurgerMenuDropDownMenuItem onClick={handleLogOut}>
                <LogOutSCG color={colors.gray} />
                <BurgerMenuDropDownMenuText>Logout</BurgerMenuDropDownMenuText>
              </BurgerMenuDropDownMenuItem>
            </BurgerMenuDropDownMenuContainer>
          }
        </BurgerMenuLinkContainer>
      </BurgerMenuLinksContainer>
    </BurgerMenuContainer>
  )
}

export interface BurgerMenuContainerProps {
  active: boolean;
}

const BurgerMenuContainer = styled.div<BurgerMenuContainerProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 100;
  right: 0;
  height: 100%;
  width: 260px;
  padding: 28px 24px;
  background-color: ${colors.darkerGray};
  transition: all 0.5s ease 0s;
  transform: ${(props) => (props.active ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 0, 0)')};
`

const BurgerMenuHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  & > *:not(:last-child) {
    margin-right: 30px;
  }
`

const BurgerMenuLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const BurgerMenuLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  border-bottom: 1px solid ${colors.darkGray};
  cursor: pointer;
`

const BurgerMenuLinkText = styled.p`
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  color: ${colors.white};
`

export interface DropDownProps {
  active: boolean;
}

const DropDownArrow = styled.div<DropDownProps>`
  transform: ${(props) => (props.active ? 'scaleY(-1)' : 'scaleY(1)')};
  transition: 0.3s;
`

const BurgerMenuDropDownButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BurgerMenuDropDownMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  margin-bottom: -10px;
`

const BurgerMenuDropDownMenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`

const BurgerMenuDropDownMenuText = styled.p`
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  color: ${colors.gray};
  margin-left: 8px;
`
