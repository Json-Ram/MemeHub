import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 230px;
  margin: 20px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  background-color: grey;
`;

const Details = styled.div`
  display: flex;
  margin: 10px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: grey;
  object-fit: cover;
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



const Card = () => {
  return (
    <Container>
      <Image src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80"/>
      <Details>
        <ChannelImage src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80"/>
        <Text>
          <Title>Scooby Doo: Season 1</Title>
          <ChannelName> Zarah Hambert</ChannelName>
          <Info>69 views ~ 54 mins ago</Info>
        </Text>
      </Details>
    </Container>
  )
}

export default Card;
