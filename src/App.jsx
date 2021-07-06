import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./containers/PhotoCardWithQuery";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { Navbar } from "./components/NavBar";

const UserLogged = ({ children }) => {
  return children({ isAuth: false });
};
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Logo />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pet/:categoryId" component={Home} />
          <Route exact path="/detail/:detailId" component={Detail} />
        </Switch>
        <UserLogged>
          {({ isAuth }) =>
            isAuth ? (
              <Switch>
                <Route exact path="/favs" component={Favs} />
                <Route exact path="/user" component={User} />
              </Switch>
            ) : (
              <Switch>
                <Route exact path="/favs" component={NotRegisteredUser} />
                <Route exact path="/user" component={NotRegisteredUser} />
              </Switch>
            )
          }
        </UserLogged>
        <Navbar />
      </BrowserRouter>
    </>
  );
};
