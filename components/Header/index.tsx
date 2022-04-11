import React from "react";
import logo from '../../public/logo.png';
import { HeaderContainer } from "./styles";
import Image from 'next/image';
import Link from 'next/link'

export const Header: React.FC = () => {
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
    </HeaderContainer>
  )
}
