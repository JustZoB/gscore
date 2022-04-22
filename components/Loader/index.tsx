import React from "react";
import styled from "styled-components";
import Image from 'next/image';
import loader from '../../public/loader.gif';

export const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <Image
        src={loader}
        alt='Loader'
        layout="fixed"
        width={50}
        height={50}
      />
    </LoaderContainer>
  )
}

const LoaderContainer = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`
