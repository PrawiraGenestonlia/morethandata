import { FC, ComponentClass } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useCustomSelector, REDUCER_TYPES } from '@react-redux-helper';

export const PrivateRoute: FC<RouteProps> = (props: RouteProps): JSX.Element => {
  const Component = (props.component as ComponentClass);
  const { token } = useCustomSelector<REDUCER_TYPES['auth']>('auth');
  return (
    <Route exact={props.exact} path={props.path} render={(_props) =>
      token ?
        <Component {..._props} /> :
        <Redirect to={{ pathname: '/', state: { from: props && props.location } }} />
    } />
  )
}