import React from "react";
import { Link } from "react-router-dom";

const SingleCourse = ({ data }) => {
  const { title, id, image, description } = data;
  return (
    <div className="mx-5">
      <Link
        to={`/courses/${id}`}
        className="card z-0 w-full bg-base-100 shadow-xl image-full h-96 relative overflow-hidden transition duration-200 transform hover:-translate-y-2 hover:shadow-2xl"
      >
        <figure>
          <img src={image} className="object-cover" alt="Shoes" />
        </figure>
        <div className="card-body absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-50 opacity-50 hover:opacity-100">
          <h2 className=" text-4xl">{title}</h2>
          <p>{description.slice(0, 100)}...More</p>
        </div>
      </Link>
    </div>
  );
};

export default SingleCourse;
