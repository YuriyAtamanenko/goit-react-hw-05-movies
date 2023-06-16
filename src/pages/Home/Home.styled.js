import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 400;

  &:hover {
    color: #5a93ca;
  }
`;

export const List = styled.li`
  margin-bottom: 6px;
`;
