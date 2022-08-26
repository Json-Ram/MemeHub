import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import IosShareIcon from '@mui/icons-material/IosShare';


const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "600px"};
  margin: ${(props) => props.type === "sm" ? "10px" : "20px"};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
  background-color: ${({theme}) => theme.bgLighter};
  padding: 10px;
`;

const Image = styled.img`
  width: 90%;
  height: ${(props) => props.type === "sm" ? "120px" : "auto"};
  padding-left: 5%;
  padding-top: 5%;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  padding-left: 5%;
  padding-bottom: 2%;
`;

const ChannelImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: grey;
  object-fit: cover;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Text = styled.div`

`;

const Title = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin: 2px 0px;
`;

const Info = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: ${(props) => props.type === "sm" ? "none" : "flex"};
  gap: 10px;
  margin-left: 8%;
  color: ${({ theme }) => theme.text};
  align-items: start;
`;

const Button = styled.div`
  display: flex;
  align-items: end;
  gap: 5px;
  cursor: pointer;
  font-size: 14px;
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
        <Buttons type={type}>
            <Button><LocalFireDepartmentIcon /> 12K</Button>
            <Button><DeleteIcon />Dislike</Button>
            <Button><PlaylistAddIcon />Save</Button>
            <Button><IosShareIcon />Share</Button>
          </Buttons>
      </Details>
    </Container>
    </Link>
  )
}

export default Card;
