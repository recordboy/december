import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 35px;
  cursor: pointer;
  background-color: #e0e0e0;
`;
const InputText = props => {
  const { title, runServer } = props;
  return (
    <StyledButton type="button" onClick={runServer}>
      {title}
    </StyledButton>
  );
};

export default InputText;
