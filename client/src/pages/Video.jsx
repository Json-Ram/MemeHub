import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const videoWrapper = styled.div`

`;

const Title = styled.div`
  
`;

const Details = styled.div`
  
`;

const Info = styled.span`
  
`;

const Recommended = styled.div`
  flex: 2;
`;


const Video = () => {
  return (
    <Container>
      <Content>content</Content>
      <Recommended>recommendations</Recommended>
    </Container>
  )
}

export default Video;
