import React from "react";
import { PhotoCardWithQuery } from "../containers/PhotoCardWithQuery";
import { Layout } from "../components/Layout";

export const Detail = (props) => {
  const { detailId } = props.match.params;

  return (
    <Layout title={`Fotografia ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  );
};
