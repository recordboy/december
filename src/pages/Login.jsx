import React from 'react';
import styled from 'styled-components';
import Input from '../components/Input';

const Login = () => {
  return (
    <div>
      <Input type="text" title="이름" />
      <Input type="password" title="비밀번호" />
    </div>
  );
};

export default Login;
