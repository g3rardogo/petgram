import React from "react";
import { Loader } from "../components/Loader";
import { useQuery, gql } from "@apollo/client";
import { ListOfFavs } from "../components/ListOfFavs";
import { NoFavorites } from "../components/NoFavorites";

const GET_FAVORITES = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export const GetFavorites = () => {
  const { loading, error, data } = useQuery(GET_FAVORITES, {
    fetchPolicy: "cache-and-network",
  });
  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <Loader />;
  }
  const { favs } = data;
  if (favs.length !== 0) {
    return <ListOfFavs favs={favs} />;
  } else {
    return <NoFavorites />;
  }
};
