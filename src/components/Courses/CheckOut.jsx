import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const Datas = useLoaderData();
  return (
    <div>
      <div>
        {Datas.map((data) => (
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mx-auto sm:text-center lg:max-w-2xl">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                        width="52"
                        height="24"
                      />
                    </svg>
                  </span>
                  <h1>{data.title} </h1>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  {data.description.slice(0, 150)}
                </p>
              </div>
              <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                <img
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                  src={data.image}
                  alt=""
                />
              </div>
              <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
                {data.description.slice(150)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckOut;
