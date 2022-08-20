import React from 'react';
import styled from 'styled-components';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Comments from '../components/Comments';
import Card from '../components/Card';
import DeleteIcon from '@mui/icons-material/Delete';

const Container = styled.div`
  display: flex;
  gap: 24px;
  margin: 30px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div`
  
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-size: 14px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 1px solid ${({ theme }) => theme.soft};
`;

const Recommended = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const ChannelImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;


const Subscribe = styled.button`
  background-color: #2ba81a;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 15px;
  cursor: pointer;
`;


const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
        <iframe 
          width="900" 
          height="500" 
          src="https://www.youtube.com/embed/qsfISQIZt9A?list=PLSzdkW8i2By_7DRe18oyQDecbc-k7X2Mt" 
          title="Scooby Doo Where Are You! 1 4   Hassle In The Castle" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
        </VideoWrapper>
        <Title>Scooby Doo Season Episode 1</Title>
        <Details>
          <Info> 7,045,349 views ~ Aug 11, 2022</Info>
          <Buttons>
            <Button><ThumbUpIcon /> 12K</Button>
            <Button><DeleteIcon />Dislike</Button>
            <Button><PlaylistAddIcon />Save</Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <ChannelImage src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80"/>
            <ChannelDetails>
            <ChannelName>Farah Yambert</ChannelName>
            <ChannelCounter>755K Subscribers</ChannelCounter>
            <Description>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas fugit nemo rem voluptate, vero dolores iste. Et voluptates nisi, minima quaerat ipsa autem deserunt, accusamus dolore rem voluptas itaque. Perspiciatis!
            </Description>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommended>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommended>
    </Container>
  )
}

export default Video;
