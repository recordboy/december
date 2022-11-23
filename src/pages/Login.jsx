import React from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';

const LoginWrap = styled.div`
  margin: 0 auto;
  padding: 30px 20px;
  border: 1px solid #ccc;
  width: 300px;
`;

const runServer = () => {
  fetch('http://localhost:4000/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: 'newface@dco.com',
      password: 'super-strong-password',
    }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.accessToken) {
        console.log(data.accessToken);
        localStorage.setItem('token', data.accessToken);
      }
    });
};

const Login = () => {
  return (
    <LoginWrap>
      <Input type="text" title="이름" />
      <Input type="password" title="비밀번호" />
      <Button title="확인" runServer={runServer} />
    </LoginWrap>
  );
};

export default Login;
