import React from 'react';
import styled from 'styled-components';
//import memeHub from "../img/memeHub.png";
import ApartmentIcon from '@mui/icons-material/Apartment';
import FaceIcon from '@mui/icons-material/Face';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LightModeIcon from '@mui/icons-material/LightMode';

const Container = styled.div`
  flex: 1;
  background-color: ${({theme}) =>theme.bgLighter};
  height: 100vh;
  color: ${({theme}) =>theme.text};
  font-size: 12px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.div`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
`;

const Hr = styled.div`
  margin: 15px 0px;
  border: 0.5px solid ${({theme}) =>theme.soft};
`;

const Login = styled.div`

`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid green;
  color: green;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

//const Title = styled.h2`
//  font-size: 12px;
//  font-weight: 500;
//  color: #aaaaaa;
//  margin-bottm: 20px;
//`;

const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src=""/>
          <DirectionsRunIcon />
          MemeHub
        </Logo>
        <Item>
          <ApartmentIcon />
          Home
        </Item>
        <Item>
          <TravelExploreIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsIcon />
          Subscriptions
        </Item>
        <Item>
          <HistoryIcon />
          History
        </Item>
        <Item>
          <LiveTvIcon />
          Live
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment and subscribe.
          <Button>
            <FaceIcon />
            Sign In
          </Button>
        </Login>
        <Hr />
        <Item>
          <SettingsIcon />
          Settings
        </Item>
        <Item>
          <FlagIcon />
          Report
        </Item>
        <Item>
          <ContactSupportIcon />
          Help
        </Item>
        <Item onClick={()=>setDarkMode(!darkMode)}>
          <LightModeIcon />
          Light Mode
        </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu
