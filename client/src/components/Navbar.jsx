import React from 'react'
import styled from 'styled-components';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';


const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 65px;
  padding: 0px 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  position: relative;
`;

const Search = styled.div`
  width: 25%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1.5px solid ${({ theme }) => theme.bg};
  border-radius: 3px;
  color: ${({ theme }) => theme.text};

  &:hover {
    border:1.5px solid #2ba81a;
  }

  :focus-within {
    border:1.5px solid #2ba81a;
  }
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
  width: 100%;

  ::placeholder {
    color: ${({ theme }) => theme.text};
  }
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: #2ba81a;
  border: none;
  color: white;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;


function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Search>
          <SearchIcon />
          <Input placeholder="Search for Memes" />
        </Search>
        <Link to="login" style={{textDecoration: "none"}}>
        <Button>
          <FingerprintIcon />
          Log In
        </Button>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Navbar