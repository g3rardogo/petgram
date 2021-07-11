import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Logo } from "./components/Logo";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { Navbar } from "./components/NavBar";
import Context from "./Context";
import { NotFound } from "./pages/NotFound";

const Favs = React.lazy(() => import("./pages/Favs"));

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
              <Route exact path="/detail/:detailId" component={Detail} />
              {!isAuth && (
                <Route exact path="/login" component={NotRegisteredUser} />
              )}
              {!isAuth && <Redirect from="/favs" to="/login" />}
              {!isAuth && <Redirect from="/user" to="/login" />}
              {isAuth && <Redirect from="/login" to="/" />}
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
