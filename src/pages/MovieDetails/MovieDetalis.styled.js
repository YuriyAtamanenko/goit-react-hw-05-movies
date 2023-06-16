import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const HeadInfo = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

export const Section = styled.section`
  padding: 16px;
`;

export const GoBack = styled(Link)`
  border: 1px solid #f8f8f8;
  text-decoration: none;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 2px;
  padding: 0px 8px;

  &:hover {
    box-shadow: none;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 400;

  &:hover {
    color: #5a93ca;
  }

  &.active {
    color: #5a93ca;
  }
`;

export const ListItem = styled.li`
list-style: none;
}`;
