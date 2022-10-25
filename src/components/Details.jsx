import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const Datas = useLoaderData();
  return (
    <div>
      {Datas.map((data) => (
        <p>{data.title}</p>
      ))}
    </div>
  );
};

export default Details;
