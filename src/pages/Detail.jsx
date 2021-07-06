import React from "react";
import { PhotoCardWithQuery } from "../containers/PhotoCardWithQuery";

export const Detail = (props) => {
  const { detailId } = props.match.params;

  return <PhotoCardWithQuery id={detailId} />;
};
