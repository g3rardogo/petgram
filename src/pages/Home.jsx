import React from "react";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { ListOfCategories } from "../components/ListOfCategories";

export const Home = (props) => {
  const { categoryId } = props.match.params;
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={parseFloat(categoryId)} />
    </>
  );
};
