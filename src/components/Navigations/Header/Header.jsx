import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import {getIsAuth} from '../../../redux/auth/auth-selectors';

import MainNavigate from '../MainNavigate/MainNavigate';
import AuthNavigate from '../AuthNavigate/AuthNavigate';
import UserNavigate from '../UserNavigate/UserNavigate';

import { HeaderBar} from './Header.styled';


// Компонент хедера приложения (бара)
export default function Header() {
  const isAuth = useSelector(getIsAuth);

  return (
    <HeaderBar>
      <MainNavigate />
      {isAuth ? <UserNavigate /> : <AuthNavigate />}
    </HeaderBar>
  );
};

Header.propTypes = {
  isAuth: PropTypes.bool,
};

