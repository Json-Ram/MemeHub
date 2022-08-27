import React from 'react';
import styled from 'styled-components';
import ApartmentIcon from '@mui/icons-material/Apartment';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Link } from 'react-router-dom';
import LogoImg from "../img/memefrog1.png";
import FingerprintIcon from '@mui/icons-material/Fingerprint';

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
  font-family: "Lily Script One";
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 22px;
  color: #2ba81a;

`;

const Img = styled.img`
  height: 35px;
  width: 35px;
  background: transparent;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 7.5px;
  font-size: 12px;

  &:hover {
    background-color: ${({ theme }) => theme.bg};
  }
`;

const Hr = styled.div`
  margin: 15px 0px;
  border: 2px solid ${({theme}) =>theme.soft};
`;

const Login = styled.div`
  padding: 7.5px;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: #2ba81a;
  border: none;
  color: white;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;


const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
      <Wrapper>
      <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
        <Logo>
          <Img src={LogoImg}/>
          MemeFrog
        </Logo>
        </Link>
        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
        <Item>
          <ApartmentIcon />
          Home
        </Item>
        </Link>
        <Link to="trending" style={{textDecoration: "none", color:"inherit"}}>
          <Item>
            <TravelExploreIcon />
            Explore
          </Item>
        </Link>
        <Link to="subscribed" style={{textDecoration: "none", color:"inherit"}}>
          <Item>
            <SubscriptionsIcon />
            Subscriptions
          </Item>
        </Link>
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
          Log In to like videos, comment and subscribe.
          <Link to="login" style={{textDecoration: "none"}}>
          <Button>
            <FingerprintIcon />
            Log In
          </Button>
          </Link>
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
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu
