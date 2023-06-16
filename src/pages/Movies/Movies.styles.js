import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  padding: 16px;
`;

export const Input = styled.input`
  height: 33px;
  font-size: 16px;
`;

export const Submit = styled.button`
  height: 38px;
  font-size: 16px;
  color: white;
  background-color: #5a93ca;
  border: none;
  cursor: pointer;
`;
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
