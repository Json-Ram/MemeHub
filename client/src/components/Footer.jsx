import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import footerImage from "../img/footer.png";

const Container = styled.div`
  height: 100px;
  bottom: 0;
  background-color: ${({ theme }) => theme.bgLighter};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding-right: 40px;
`;

const Info = styled.div`
  display: flex;
  align-items: end;
  color: ${({ theme }) => theme.text};
  gap: 5px;
  padding-bottom: 10px;
  font-size: 12px;
`;

const ImgWrapper = styled.div`
  display: flex;
  height: 100%;
  padding-right: 40px;
`;

const Image = styled.img`
  background: transparent;
  width: 100%;
  height: 50px;
  object-fit: cover;
`;


export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <Info><GitHubIcon />Json-Ram</Info>
        <Info><EmailIcon />EMAIL HERE</Info>
        <Info>Made with gross negligence by Jason 😈</Info>
      </Wrapper>
    </Container>
  )
}
