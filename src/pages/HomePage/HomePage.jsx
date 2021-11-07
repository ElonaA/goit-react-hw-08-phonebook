import { NavLink } from 'react-router-dom';
import { Wrapper, Inner, Text, Icon } from './HomePage.styled';
import styled from '@emotion/styled/macro';
import routes from '../../components/Routes/Routes';
import cat from '../../img/cat_icon.png';


export const Button = styled(NavLink)`
  display: inline-flex;
  padding: 10px 35px;
  margin-top: 15px;
  border: 0;
  border-radius: 50px;
  font-size: ${props => props.theme.size.button};
  font-weight: 500;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.blue};
  border: 2px solid ${props => props.theme.colors.white};
  transition: background-color ${props => props.theme.animate.transition};
  outline: none;
  cursor: pointer;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.blue};
    border: 2px solid ${props => props.theme.colors.blue};
  }
`;

export default function HomeView() {
  return (
    <Inner>
      <Wrapper>
        <Text>This is a small but very fast React application. Add an unlimited list of contacts. Try a quick search, delete.</Text>
        <Icon src={cat} width="200" alt="funny cat sleep" />
        <Button to={routes.contacts}>
            Try in now
          </Button>
        </Wrapper>
    </Inner>
  );
}