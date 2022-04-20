import React from "react";
import styled from "styled-components";
import Image from 'next/image';
import arrowRight from '../../public/arrow-right.svg';
import colors from "../../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { paginationPrev, paginationNext } from "../../store/subscribes/reducers";

interface PaginationsButtonProps {
  active: boolean,
  flipHorizontal?: boolean,
}

export const Paginations: React.FC = () => {
  const subscribesSlice = useSelector((state: RootState) => state.subscribesSlice);
  const dispatch = useDispatch();

  return (
    <PaginationsContainer>
      <PaginationButton
        active={subscribesSlice.paginationActiveElement !== 1}
        flipHorizontal
        onClick={() => dispatch(paginationPrev())}
      >
        <Image
          src={arrowRight}
          alt='left'
          layout="fixed"
        />
      </PaginationButton>
      <PaginationNumbers>
        <PaginationNumberActive>
          {subscribesSlice.paginationActiveElement}
        </PaginationNumberActive>/{subscribesSlice.paginationLength}
      </PaginationNumbers>
      <PaginationButton
        active={subscribesSlice.paginationActiveElement !== subscribesSlice.paginationLength}
        onClick={() => dispatch(paginationNext())}
      >
        <Image
          src={arrowRight}
          alt='right'
          layout="fixed"
        />
      </PaginationButton>
    </PaginationsContainer>
  )
}

const PaginationsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin-bottom: 32px;

  @media screen and (max-width: 767.92px) {
    align-self: center;
  }

  & > *:not(:last-child) {
    margin-right: 12px;
  }
`
const PaginationNumbers = styled.p`
  font-size: 22px;
  line-height: 28px;
  font-weight: 700;
  color: ${colors.darkGray};
`

const PaginationNumberActive = styled.span`
  color: ${colors.white};
`

const PaginationButton = styled.div<PaginationsButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 1px solid ${colors.gray};
  border-radius: 12px;
  opacity: ${(props) => (props.active ? 1 : 0.6)};
  cursor: ${(props) => (props.active ? 'pointer' : 'not-allowed')};
  transform: ${(props) => (props.flipHorizontal ? 'scaleX(-1)' : 'unset')};
  transition: 0.3s;
`
