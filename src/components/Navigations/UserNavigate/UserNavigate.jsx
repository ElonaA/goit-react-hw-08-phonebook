import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {getUserEmail} from '../../../redux/auth/auth-selectors';
import authOperations from '../../../redux/auth/auth-operations';

import { Name, Profile, LogOut, PersonIcon} from './UserNavigate.styled';

export default function UserNavigate() {
  const mail = useSelector(getUserEmail);
  const dispatch = useDispatch();

  return (
    <Profile>
      <PersonIcon /><Name>{mail}</Name>

      <LogOut
        type="button"
        title="Log out"
        aria-label="Log out"
        onClick={() => dispatch(authOperations.logOut())}
      > Logout </LogOut>
    </Profile>
  );
}


UserNavigate.propTypes = {
  mail: PropTypes.string,
  logOut: PropTypes.func,
};