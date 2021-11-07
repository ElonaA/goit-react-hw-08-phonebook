import { NavLink } from 'react-router-dom';
import routes from '../../Routes/Routes';
import styled from '@emotion/styled/macro';
import { List, Item} from './AuthNavigate.styled';

export const MenuLink = styled(NavLink)`
  display: block;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;

  color: ${props => props.theme.colors.white};

  transition: color ${props => props.theme.animate.transition};

  outline: none;
  cursor: pointer;

  &.${props => props.activeClassName} {
  color: ${props => props.theme.colors.blue};
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.blue};
  }
`;

export default function AuthNavigate() {
  return (
    <List>
      <Item>
        <MenuLink
          to={routes.register}
          activeClassName={'active'}
        >
          Register
        </MenuLink>
      </Item>

      <Item>
        <MenuLink
          exact
          to={routes.login}
          activeClassName={'active'}
        >
          Log in
        </MenuLink>
      </Item>
    </List>
  );
}