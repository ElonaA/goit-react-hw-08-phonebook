import { Switch, Route, useLocation } from 'react-router-dom';
import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../Navigations/Header/Header';
import authOperations from '../../redux/auth/auth-operations';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicRoute from '../PublicRoute/PublicRoute';

import {Section} from '../Section/Section';
import { Toaster } from 'react-hot-toast';
import Preloader from '../Loader/Loader';

import routes from '../Routes/Routes';


const HomePage = lazy(() =>
  import('../../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage' /* webpackChunkName: "contacts-page" */),
);
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('../../pages/LoginPage/LoginPage' /* webpackChunkName: "login-page" */),
);
const PageNotFound = lazy(() =>
  import('../../pages/PageNotFound/PageNotFound' /* webpackChunkName: "404-page" */),
);


export default function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Section>
        <Header />
        <Suspense
          fallback={<Preloader />}
        >
          <Switch location={location}>
            <Route path={routes.home} exact component={HomePage} />
            <PublicRoute
              path={routes.login}
              redirectTo={routes.contacts}
              restricted
              component={LoginPage}
            />
            <PublicRoute
              path={routes.register}
              redirectTo={routes.contacts}
              restricted
              component={RegisterPage}
            />
            <PrivateRoute
              path={routes.contacts}
              component={ContactsPage}
              redirectTo={routes.login}
            />
            <PublicRoute component={PageNotFound} />
          </Switch>
           </Suspense>
      </Section>
     <Toaster />
    </>
  );

}