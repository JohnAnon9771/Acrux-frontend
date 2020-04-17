import React, { ReactType } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

interface ComponentProp {
  component: ReactType
  isPrivate?: boolean;
}

type Props = ComponentProp & RouteProps

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}: Props) {
  const signed = true;
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
