import React from "react";
import { CopyrightListContainer, CopyrightListItem, CopyrightText, CopyrightLink } from "./styles";
import Link from 'next/link'

export const CopyrightList: React.FC = () => {
  return (
    <CopyrightListContainer>
      <CopyrightListItem>
        <CopyrightText>Copyright © 2022 GScore</CopyrightText>
      </CopyrightListItem>
      <CopyrightListItem>
        <CopyrightText>All Rights Reserved</CopyrightText>
      </CopyrightListItem>
      <CopyrightListItem>
        <Link href="/cookies" passHref>
          <CopyrightLink>Cookies</CopyrightLink>
        </Link>
      </CopyrightListItem>
      <CopyrightListItem>
        <Link href="/privacy" passHref>
          <CopyrightLink>Privacy Policy</CopyrightLink>
        </Link>
      </CopyrightListItem>
    </CopyrightListContainer>
  )
}
