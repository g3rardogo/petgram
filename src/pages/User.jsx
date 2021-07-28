import React, { useContext } from "react";
import { Context } from "../Context";
import { Layout } from "../components/Layout";
import { RoundedImage } from "../components/RoundedImage";
import { SubmitButton } from "../components/SubmitButton";
import UserImage from "../assets/user.png";

export default () => {
  const { removeAuth } = useContext(Context);
  return (
    <Layout title="Perfil" subtitle="Información del usuario">
      <RoundedImage src={UserImage} />
      <h3>User</h3>
      <SubmitButton action={"Cerrar Sesion"} onClick={removeAuth} />
    </Layout>
  );
};
