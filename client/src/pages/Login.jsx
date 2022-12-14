import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 70px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  justify-content: center;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};

  :focus {
    border:1.5px solid #2ba81a;
  }
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  margin-top: 5px;
  cursor: pointer;
  font-weight: 500;
  background-color: #2ba81a;
  color: white;
`;

const MoreInfo = styled.div`
  display: flex;
  font-size: 12px;
  margin-top: 10px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const Logo = styled.h1`
  font-family: "Lily Script One";
  font-size: 30px;
  color: #2ba81a;
`;


const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Log In</Title>
        <Title>
          to
        </Title>
        <Logo>
          MemeFrog
        </Logo>
        <Input placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button>Log In</Button>
        <Title>or</Title>
        <Input placeholder="Username" />
        <Input placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Sign Up</Button>
      </Wrapper>
      <MoreInfo>
        English(US)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </MoreInfo>
    </Container>
  )
}

export default Login;
