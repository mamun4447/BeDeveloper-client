import React from "react";
import { Link } from "react-router-dom";

const SingleCourse = ({ data }) => {
  const { title, id, image, description } = data;
  return (
    <div className="mx-5">
      <Link
        to={`/courses/${id}`}
        className="card z-0 w-full bg-base-100 shadow-xl image-full h-96"
      >
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <h2 className=" text-4xl">{title}</h2>
          <p>{description.slice(0, 30)}...More</p>
        </div>
      </Link>
    </div>
  );
};

export default SingleCourse;
