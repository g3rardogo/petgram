import React from "react";
import { List } from "./styles";
import { Loader } from "../Loader";
import { gql, useQuery } from "@apollo/client";
import { PhotoCard } from "../PhotoCard";

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId },
  });

  if (loading) return <Loader />;
  if (error) return <p>Error</p>;

  return (
    <List>
      {data.photos.map((photoCard) => (
        <PhotoCard key={photoCard.id} {...photoCard} />
      ))}
    </List>
  );
};
