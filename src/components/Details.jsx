import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const Datas = useLoaderData();
  // console.log(Datas);
  return (
    <div>
      {Datas.map((data) => (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content grid grid-cols-1 lg:grid-cols-3 mx-auto">
            <img
              src={data.image}
              className="max-w-sm rounded-lg shadow-2xl col-span-1 sm:mx-auto"
              alt=""
            />
            <div className="col-span-1 lg:col-span-2 text-center lg:text-left">
              <h1 className="text-5xl font-bold">
                {data.title}{" "}
                <button className="btn btn-xs btn-accent">Pdf</button>
              </h1>
              <p className="py-6">{data.description}</p>
              <Link to={`/checkout/${data.id}`} className="btn btn-primary">
                Check Out
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
