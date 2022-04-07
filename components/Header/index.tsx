import React from "react";
import logo from '../../public/logo.png';
import { HeaderContainer } from "./styles";
import Image from 'next/image';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Image
        src={logo}
        alt='Logo'
      />
    </HeaderContainer>
  )
}
