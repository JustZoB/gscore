import React, { useState } from "react";
import logo from '../../public/logo.png';
import arrow from '../../public/arrow.svg';
import { DropDownButton, DropDownMenu, HeaderContainer, LinkContainer, LinksContainer, LinkText, LogoWrapper } from "./styles";
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { logOut } from "../../store/authorization/reducers";
import { clearAfterLogOut } from "../../store/subscribes/reducers";
import { BurgerIcon } from "../BurgerMenu/BurgerIcon";
import { openBurgerMenu } from "../../store/burgerMenu/reducers";
import SettingsSVG from "../../public/svg/SettingsSVG";
import colors from "../../utils/colors";
import LogOutSCG from "../../public/svg/LogOutSCG";

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const authorization = useSelector((state: RootState) => state.authorizationSlice);
  const [dropDownActive, setDropDownActive] = useState<boolean>(false);

  const handleLogOut: React.MouseEventHandler<HTMLDivElement> = (e) => {
    dispatch(logOut())
    dispatch(clearAfterLogOut())
  }

  return (
    <HeaderContainer>
      <Link href="/" passHref>
        <a>
          <LogoWrapper>
            <Image
              src={logo}
              alt='Logo'
            />
          </LogoWrapper>
        </a>
      </Link>
      {authorization.user &&
        <>
          {authorization.user.user &&
            <>
              <LinksContainer>
                <LinkContainer>
                  <Link href="/my-subscriptions" passHref>
                    <LinkText>My subscriptions</LinkText>
                  </Link>
                </LinkContainer>

                <DropDownButton onClick={() => setDropDownActive(!dropDownActive)}>
                  <LinkText>{authorization.user.user.username}</LinkText>
                  <Image
                    src={arrow}
                    alt='Down arrow'
                    layout="fixed"
                  />
                  {dropDownActive &&
                    <DropDownMenu>
                      <Link href="/settings/update-data-form" passHref>
                        <a>
                          <LinkContainer>
                            <SettingsSVG color={colors.white} />
                            <LinkText>Settings</LinkText>
                          </LinkContainer>
                        </a>
                      </Link>

                      <LinkContainer onClick={handleLogOut}>
                        <LogOutSCG color={colors.white} />
                        <LinkText>Logout</LinkText>
                      </LinkContainer>
                    </DropDownMenu>
                  }
                </DropDownButton>
              </LinksContainer>
              <BurgerIcon onClick={() => dispatch(openBurgerMenu())} />
            </>
          }
        </>
      }
    </HeaderContainer>
  )
}
