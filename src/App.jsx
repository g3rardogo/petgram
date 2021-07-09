import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./containers/PhotoCardWithQuery";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { Navbar } from "./components/NavBar";
import Context from "./Context";
import { NotFound } from "./pages/NotFound";

export const App = () => {
  return (
    <>
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
    </>
  );
};
