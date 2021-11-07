import styled from '@emotion/styled/macro';
import { PersonSquare } from '@styled-icons/bootstrap';

export const Name = styled.p`
  font-weight: 500;
  color: ${props => props.theme.colors.white};
`;

export const PersonIcon = styled(PersonSquare)`
  margin-right: 15px;
  color: ${props => props.theme.colors.white};
  width: ${props => props.theme.icon.small};
  &:hover {
    color: ${props => props.theme.colors.blue};
  }
`;

export const LogOut = styled.button`
  display: inline-flex;
  padding: 5px 20px;
  margin-left: 15px;
  border: 0;
  border-radius: 50px;
  font-size: ${props => props.theme.size.small};
  font-weight: 600;
  color: ${props => props.theme.colors.blue};
  background-color: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.blue};
  transition: all ${props => props.theme.animate.transition};
  outline: none;
  cursor: pointer;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
    border: 2px solid ${props => props.theme.colors.blue};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 10px;
`;
