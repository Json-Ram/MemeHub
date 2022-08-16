import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "331px"};
  margin: ${(props) => props.type === "sm" ? "10px" : "20px"};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => props.type === "sm" ? "120px" : "202px"};
  background-color: grey;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: grey;
  object-fit: cover;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Text = styled.div`

`;

const Title = styled.h1`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 10px;
  color: ${({ theme }) => theme.textSoft};
  margin: 2px 0px;
`;

const Info = styled.div`
  font-size: 8px;
  color: ${({ theme }) => theme.textSoft};

`;



const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
    <Container type={type}>
      <Image type={type} src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80"/>
      <Details type={type}>
        <ChannelImage type={type} src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80"/>
        <Text>
          <Title>Scooby Doo: Season 1</Title>
          <ChannelName> Zarah Hambert</ChannelName>
          <Info>69 views ~ 54 mins ago</Info>
        </Text>
      </Details>
    </Container>
    </Link>
  )
}

export default Card;
