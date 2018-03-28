import styled from 'styled-components';

const Li = styled.li`
  display: block;
  border-style: dotted;
  padding: 15px;
  margin: 15px;
  text-align: center;
  transition: all .1s ease;
  &:hover {
    box-shadow: 3px 2px;
  }
`;

export default Li;
