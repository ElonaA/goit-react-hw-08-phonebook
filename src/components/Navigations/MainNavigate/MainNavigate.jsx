import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {getIsAuth} from '../../../redux/auth/auth-selectors';
import routes from '../../Routes/Routes';

import styled from '@emotion/styled/macro';
import { List, Item} from './MainNavigate.styled';

export const MenuLink = styled(NavLink)`
  display: block;
  font-size: 16px;
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

// Компонент главной навигации (меню) приложения
export default function MainNavigate() {

  const isAuth = useSelector(getIsAuth);

  return (
  <nav>
    <List>
      <Item>
        <MenuLink
          exact
          to={routes.home}
          activeClassName={'active'}
        >
          Home
        </MenuLink>
      </Item>

      {isAuth && (
        <li>
          <MenuLink
            to={routes.contacts}
            activeClassName={'active'}
          >
            Contacts
          </MenuLink>
        </li>
      )}
    </List>
  </nav>
);
}

MainNavigate.propTypes = {
  isAuth: PropTypes.bool,
};

