import React, { useContext, useEffect } from "react";
import { useProductContext } from "../Context/ProductContext";
import ProductCard from "./ProductCard";

function ProductList() {
  const { answer, getAns } = useProductContext();

  useEffect(() => {
    getAns();
  }, []);

  return (
    <div>
      {answer.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
}

export default ProductList;
