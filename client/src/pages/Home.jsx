import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;


export default function Home({type}) {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`)
      setVideos(res.data)
    }
    fetchVideos()
  },[type])

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video.id} video={video}/>
      ))}
    </Container>
  )
}
