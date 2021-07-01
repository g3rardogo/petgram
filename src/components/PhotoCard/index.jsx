import React, { useEffect, useRef, useState } from "react";
import { Article, ImgWrapper, Img, Button } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const key = `like-${id}`;

  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key);
      return like;
    } catch (error) {
      return false;
    }
  });

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, value);
      setLiked(value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    typeof window.IntersectionObserver !== "undefined"
      ? window.IntersectionObserver
      : await import("intersection-observer");
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(ref.current);
  }, [ref]);

  const Icon = liked ? MdFavorite : MdFavoriteBorder;
  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size="32px" />
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};
