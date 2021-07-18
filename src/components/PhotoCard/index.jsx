import React from "react";
import { Article, ImgWrapper, Img } from "./styles";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";
import { useMutationToggleLike } from "../../containers/ToggleLikeMutation";
import PropTypes from "prop-types";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen();
  const { mutation, mutationLoading, mutationError } = useMutationToggleLike();
  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id },
      },
    });
  };

  return (
    <Article ref={ref}>
      {show && (
        <>
          <ImgWrapper>
            <Img src={src} />
          </ImgWrapper>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName];

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`);
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`);
    }
  },
};
