import React, { useState } from "react";
import logo from '../../public/logo.png';
import arrow from '../../public/arrow.svg';
import settings from '../../public/settings.svg';
import logout from '../../public/logout.svg';
import { DropDownButton, DropDownMenu, HeaderContainer, LinkContainer, LinksContainer, LinkText } from "./styles";
import Image from 'next/image';
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { logOut} from "../../store/authorization/reducers";
import { clearAfterLogOut } from "../../store/subscribes/reducers";

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const authorization = useSelector((state: RootState) => state.authorizationSlice);
  const [dropDownActive, setDropDownActive] = useState<boolean>(false);

  const toggleDropDown = () => {
    setDropDownActive(!dropDownActive)
  }

  const handleLogOut: React.MouseEventHandler<HTMLDivElement> = (e) => {
    dispatch(logOut())
    dispatch(clearAfterLogOut())
  }

  return (
    <HeaderContainer>
      <Link href="/" passHref>
        <a>
          <Image
            src={logo}
            alt='Logo'
            layout="fixed"
          />
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

                <DropDownButton onClick={toggleDropDown}>
                  <LinkText>{authorization.user.user.username}</LinkText>
                  <Image
                    src={arrow}
                    alt='Down arrow'
                    layout="fixed"
                  />
                  {dropDownActive &&
                    <DropDownMenu>
                      <Link href="/settings" passHref>
                        <a>
                          <LinkContainer>
                            <Image
                              src={settings}
                              alt='Settings'
                              layout="fixed"
                            />
                            <LinkText>Settings</LinkText>
                          </LinkContainer>
                        </a>
                      </Link>

                      <LinkContainer onClick={handleLogOut}>
                        <Image
                          src={logout}
                          alt='Logout'
                          layout="fixed"
                        />
                        <LinkText>Logout</LinkText>
                      </LinkContainer>
                    </DropDownMenu>
                  }
                </DropDownButton>
              </LinksContainer>
            </>
          }
        </>
      }
    </HeaderContainer>
  )
}
