import React from "react";

function ProductCard({ item }) {
  return (
    <div>
      {item.name}
      {item.answer}
    </div>
  );
}

export default ProductCard;
