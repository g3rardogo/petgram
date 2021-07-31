import React, { useEffect, useState } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const response = await fetch(
      "https://petgram-api-g3rardogo.vercel.app/categories"
    );
    const data = await response.json();
    setCategories(data);
    setLoading(false);
  }, []);
  return { categories, loading };
}

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false);
  const { categories, loading } = useCategoriesData();
  useEffect(
    function () {
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 200;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };
      document.addEventListener("scroll", onScroll);

      return () => document.removeEventListener("scroll", onScroll);
    },
    [showFixed]
  );

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <Item key="loading">
          <Category />
        </Item>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category
              cover={category.cover}
              path={`/pet/${category.id}`}
              emoji={category.emoji}
            />
          </Item>
        ))
      )}
    </List>
  );
  return <>{showFixed ? renderList(true) : renderList()}</>;
};
