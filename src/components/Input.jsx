import React from 'react';
import styled from 'styled-components';

const StyledInputBox = styled.label`
  display: block;
  position: relative;
  margin-top: 10px;
  padding-left: 60px;
`;
const StyledInputTit = styled.span`
  position: absolute;
  top: 8px;
  left: 0;
  font-size: 14px;
`;
const StyledInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 2px 5px;
  height: 35px;
  font-size: 14px;
  background: none;
  outline: none;
`;
const InputText = props => {
  const { title, type } = props;
  return (
    <StyledInputBox>
      <StyledInputTit>{title}</StyledInputTit>
      <StyledInput type={type} />
    </StyledInputBox>
  );
};

export default InputText;
