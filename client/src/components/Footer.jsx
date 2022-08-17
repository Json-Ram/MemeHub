import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 65px;
  bottom: 0;
  background-color: ${({ theme }) => theme.bgLighter};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;


export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <Info>Github LINK</Info>
        <Info>EMAIL HERE</Info>
        <Info>Made with gross negligence by Jason :)</Info>
      </Wrapper>
    </Container>
  )
}
