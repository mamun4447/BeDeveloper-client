import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleCourse from "../SingleCourse";
import Category from "./Category";

const Services = () => {
  const datas = useLoaderData();
  return (
    <div className="">
      <h1 className="text-5xl text-center m-4">All Courses</h1>
      <div className="container mx-auto flex flex-col-reverse grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <div className=" flex-col grid md:grid-cols-2 md:col-span-2 lg:col-span-3 gap-1 my-4">
          {datas.map((data) => (
            <SingleCourse key={data.id} data={data}></SingleCourse>
          ))}
        </div>

        <div className="col-span-1 container text-left pl-20 text-lg">
          <h1 className="text-3xl my-5">Categories</h1>
          {datas.map((data) => (
            <Category key={data.id} category={data.category}></Category>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
