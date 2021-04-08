import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import { PrivateRoute } from './roleRoute';
import { generalPage, vizPage } from '../pages';

const RouterApp = () => {

  const UserRoutes = () => (
    <Switch>
      <Route exact path="/app/home" component={vizPage.AppHome} />
      <Route path="/" component={() => <Redirect to="/app/home" />} />
    </Switch>
  )

  // const PrivateRoutes = () => (
  //   <Switch>
  //     <PrivateRoute exact path="/admin/home" component={page.HomePage} />
  //     <Route path="/" component={() => <Redirect to="/admin/home" />} />
  //   </Switch>
  // )

  return (
    <Router basename="/">
      <Switch>
        {/* <Route exact path="/login" component={page.HomePage} /> */}
        <Route exact path="/" component={generalPage.GeneralLanding} />
        <Route path="/app"><UserRoutes /></Route>
        {/* <Route path="/admin"><PrivateRoutes /></Route> */}
        <Route path="/" component={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  )
}

export default RouterApp;