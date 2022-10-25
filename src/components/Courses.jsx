import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCourse from "./SingleCourse";

const Services = () => {
  const datas = useLoaderData();
  return (
    <div className="container mx-auto grid grid-cols-3 gap-1">
      {datas.map((data) => (
        <SingleCourse key={data.id} data={data}></SingleCourse>
      ))}
    </div>
  );
};

export default Services;
