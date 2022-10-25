import React from "react";
import { Link } from "react-router-dom";

const SingleCourse = ({ data }) => {
  const { title, id } = data;
  return (
    <div>
      <Link
        to={`/courses/${id}`}
        className="card w-full bg-base-100 shadow-xl image-full h-96"
      >
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </Link>
    </div>
  );
};

export default SingleCourse;
