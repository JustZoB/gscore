import React from "react";
import logo from '../../public/logo.png';
import { CopyrightContainer, FooterContainer, FooterContent, FooterText } from "./styles";
import Image from 'next/image';
import { CopyrightList } from "../CopyrightList";
import { SocialList } from "../SocialList";

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Image
          src={logo}
          alt='Logo'
          layout="fixed"
        />
        <FooterText>Ut enim ad minim veniam quis nostrud exercitation  ea commodo</FooterText>
      </FooterContent>
      
      <CopyrightContainer>
        <CopyrightList />
        <SocialList />
      </CopyrightContainer>
    </FooterContainer>
  )
}
