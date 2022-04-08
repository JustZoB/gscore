import React from "react";
import { CopyrightListContainer, CopyrightListItem, CopyrightText, GlobalFooterStyle } from "./styles";
import Link from 'next/link'

export const CopyrightList: React.FC = () => {
  return (
    <CopyrightListContainer>
      <GlobalFooterStyle />
      <CopyrightListItem>
        <CopyrightText>Copyright © 2022 GScore</CopyrightText>
      </CopyrightListItem>
      <CopyrightListItem>
        <CopyrightText>All Rights Reserved</CopyrightText>
      </CopyrightListItem>
      <CopyrightListItem>
        <Link href="/cookies">Cookies</Link>
      </CopyrightListItem>
      <CopyrightListItem>
        <Link href="/privacy">Privacy Policy</Link>
      </CopyrightListItem>
    </CopyrightListContainer>
  )
}
