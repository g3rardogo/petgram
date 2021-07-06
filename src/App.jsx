import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./containers/PhotoCardWithQuery";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Navbar } from "./components/NavBar";

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
        <Navbar />
      </BrowserRouter>
    </>
  );
};
