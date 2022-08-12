import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div`

`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  diplay: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div``;

const Button = styled.div`
  
`;

const Recommended = styled.div`
  flex: 2;
`;


const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
        <iframe 
          width="1000" 
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
            <Button>button</Button>
            <Button>button</Button>
            <Button>button</Button>
            <Button>button</Button>
          </Buttons>
        </Details>
      </Content>
      <Recommended>
        recommendations
      </Recommended>
    </Container>
  )
}

export default Video;
