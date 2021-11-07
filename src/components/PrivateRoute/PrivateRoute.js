import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsAuth } from '../../redux/auth/auth-selectors';

export default function PrivateRoute({
  component: Component,
  redirectTo,
  ...routeProps
}) {
  const isAuth = useSelector(getIsAuth);

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuth ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
}
