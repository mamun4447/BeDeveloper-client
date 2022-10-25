import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <div className="">
      <Link to="/" className="cursor-pointer underline underline-offset-3 ">
        {category}
      </Link>
    </div>
  );
};

export default Category;
