import React from "react";
import { ImageContainer } from "../components/ImageContainer";
import Error404 from "../assets/Error404.png";
import { HelmetLayout } from "../components/HelmetLayout";

export default () => {
  return (
    <HelmetLayout title="404 Error" subtitle="Error de página no encontrada">
      <ImageContainer src={Error404} />
      <p
        style={{
          marginTop: "14px",
          padding: "0 16px",
          textAlign: "center",
          color: "#0095f6",
          fontWeight: "500",
        }}
      >
        Lo sentimos, no hemos encontrado la mascota que buscabas. 🐱
      </p>
    </HelmetLayout>
  );
};
