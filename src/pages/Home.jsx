import React from "react";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { ListOfCategories } from "../components/ListOfCategories";
import { HelmetLayout } from "../components/HelmetLayout";

export const Home = (props) => {
  const { categoryId } = props.match.params;
  return (
    <HelmetLayout title="Inicio" subtitle="Publicaciones recientes">
      <ListOfCategories />
      <ListOfPhotoCards categoryId={parseFloat(categoryId)} />
    </HelmetLayout>
  );
};
