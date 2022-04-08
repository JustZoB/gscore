import React from "react";
import { SocialListContainer, SocialItem } from "./styles";
import Image from 'next/image';
import facebook from '../../public/facebook.svg';
import twitter from '../../public/twitter.svg';
import linkedin from '../../public/linkedin.svg';

export const SocialList: React.FC = () => {
  return (
    <SocialListContainer>
      <SocialItem>
        <a href="https://facebook.com/" target="_blank" rel="noreferrer">
          <Image
            src={facebook}
            alt='facebook'
            layout="fixed"
          />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <Image
            src={twitter}
            alt='twitter'
            layout="fixed"
          />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <Image
            src={linkedin}
            alt='linkedin'
            layout="fixed"
          />
        </a>
      </SocialItem>
    </SocialListContainer>
  )
}
