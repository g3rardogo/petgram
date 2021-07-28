import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Logo } from "./components/Logo";
import { Home } from "./pages/Home";
import { RegisterUser } from "./pages/RegisterUser";
import { Navbar } from "./components/NavBar";
import { LoginUser } from "./pages/LoginUser";
import Context from "./Context";

const Favs = React.lazy(() => import("./pages/Favs"));
const User = React.lazy(() => import("./pages/User"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

export const App = () => {
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <BrowserRouter>
        <Logo />
        <Context.Consumer>
          {({ isAuth }) => (
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/pet/:categoryId" component={Home} />
              {!isAuth && <Redirect from="/favs" to="/register" />}
              {!isAuth && <Redirect from="/user" to="/register" />}
              {isAuth && <Redirect from="/register" to="/" />}
              {!isAuth && (
                <>
                  <Route exact path="/register" component={RegisterUser} />
                  <Route exact path="/login" component={LoginUser} />
                </>
              )}
              <Route exact path="/favs" component={Favs} />
              <Route exact path="/user" component={User} />
              <Route component={NotFound} />
            </Switch>
          )}
        </Context.Consumer>
        <Navbar />
      </BrowserRouter>
    </Suspense>
  );
};
