import React from "react";
import { Link } from "react-router-dom";
import SingleCourse from "./SingleCourse";

const Category = ({ data }) => {
  const { title, id } = data;
  return (
    <div className="">
      <Link
        to={`/courses/${id}`}
        className="cursor-pointer underline underline-offset-3 link-accent"
      >
        {title}
      </Link>
    </div>
  );
};

export default Category;
