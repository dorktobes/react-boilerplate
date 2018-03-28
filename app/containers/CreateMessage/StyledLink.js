import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-block;
  float: left;
  text-decoration: none;
  color: #7d1414;
  background-color: #eadae8;
  padding: 8px 15px;
  transition: all .02s ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: 3px 2px;
  }
`;

export default StyledLink;
