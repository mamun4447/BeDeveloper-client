import React from "react";
import { Link } from "react-router-dom";

const Category = ({ data }) => {
  const { title, id } = data;
  return (
    <div className="">
      <Link
        to={`/courses/${id}`}
        className="btn btn-accent cursor-pointer text-center w-44 mb-2"
      >
        {title}
      </Link>
    </div>
  );
};

export default Category;
