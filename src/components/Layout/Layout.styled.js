import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #5a93ca;
  }
`;

export const Header = styled.header`
  padding-top: 16px;
  padding-bottom: 16px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px;
`;
