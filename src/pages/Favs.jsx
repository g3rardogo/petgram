import React from "react";
import { GetFavorites } from "../containers/GetFavorites";
import { Title } from "../components/Title";
import { HelmetLayout } from "../components/HelmetLayout";

export default () => {
  return (
    <HelmetLayout
      title="Favoritos"
      subtitle="Publicaciones que el usuario ha dado me gusta"
    >
      <Title title="Tus favoritos">
        <GetFavorites />
      </Title>
    </HelmetLayout>
  );
};
