import React from "react";
import { GetFavorites } from "../containers/GetFavorites";
import { Helmet } from "react-helmet";
import { Layout } from "../components/Layout";

export const Favs = () => {
  return (
    <Layout title="Tus favoritos" subtitle="Aqui encuentras tus favoritos">
      <GetFavorites />
    </Layout>
  );
};
