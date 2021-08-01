import React, { useContext } from "react";
import { Context } from "../Context";
import { Title } from "../components/Title";
import { ImageContainer } from "../components/ImageContainer";
import { SubmitButton } from "../components/SubmitButton";
import UserImage from "../assets/user.png";

export default () => {
  const { removeAuth } = useContext(Context);
  return (
    <Title title="Perfil">
      <ImageContainer src={UserImage} />
      <h3 style={{ textAlign: "center" }}>User</h3>
      <SubmitButton action={"Cerrar Sesion"} onClick={removeAuth} />
    </Title>
  );
};
