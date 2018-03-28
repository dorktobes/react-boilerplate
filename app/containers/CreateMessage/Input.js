import styled from 'styled-components';

const Input = styled.input`
  border: 1px dotted #999;
  border-radius: 15px;
  width: 70%;
  height: 35px;
  &:focus {
    outline: none;
    box-shadow: 0 0 3pt 2pt #b3d4fc;

  }
`;

export default Input;
