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
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`

`;

const SubTitle = styled.h2`

`;

const Input = styled.input`

`;

const Button = styled.button`

`;

const MoreInfo = styled.div`

`;

const Links = styled.div`

`;

const Link = styled.span`

`;


const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle> to continue to MemeHub</SubTitle>
        <Input placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button>Sign In</Button>
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
