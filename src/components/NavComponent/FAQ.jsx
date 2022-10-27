import React from "react";

const Blogs = () => {
  return (
    <div>
      <section className="container mx-auto my-20">
        <div class="relative">
          <div class="relative flex justify-start">
            <span class="pr-3 text-lg font-medium text-neutral-600 bg-white">
              {" "}
              Question answer{" "}
            </span>
          </div>
        </div>
        <div class="space-y-8 lg:divide-y lg:divide-gray-100">
          <div class="pt-8 sm:flex lg:items-end group">
            <div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
              <img
                class="w-full rounded-md h-32 lg:w-32 object-cover"
                src="../assets/cors.png"
                alt="images"
              />
            </div>
            <div>
              <p class="mt-3 text-lg font-medium leading-6 flex">
                <p class="text-xl text-gray-800 group-hover:text-gray-500 lg:text-2xl">
                  what is cors?
                </p>
              </p>
              <p class="mt-2 text-lg text-gray-500">
                Cross-origin resource sharing is a mechanism that allows
                restricted resources on a web page to be requested from another
                domain outside the domain from which the first resource was
                served. A web page may freely embed cross-origin images,
                stylesheets, scripts, iframes, and videos.
              </p>
            </div>
          </div>
          <div class="pt-8 sm:flex lg:items-end group">
            <div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
              <img
                class="w-full rounded-md h-32 lg:w-32 object-cover"
                src="../assets/firebase.png"
                alt="text"
              />
            </div>
            <div>
              <p class="mt-3 text-lg font-medium leading-6">
                <p class="text-xl text-gray-800 group-hover:text-gray-500 lg:text-2xl">
                  Why are you using firebase? What other options do you have to
                  implement authentication?
                </p>
              </p>
              <p class="mt-2 text-lg text-gray-500">
                Firebase Authentication provides backend services, easy-to-use
                SDKs, and ready-made UI libraries to authenticate users to your
                app. It supports authentication using passwords, phone numbers,
                popular federated identity providers like Google, Facebook and
                Twitter, and more. Other option, do it on backend, when we will
                use database.
              </p>
            </div>
          </div>
          <div class="pt-8 sm:flex lg:items-end group">
            <div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
              <img
                class="w-full rounded-md h-32 lg:w-32 object-cover"
                src="../assets/privet.png"
                alt="text"
              />
            </div>
            <div>
              <p class="mt-3 text-lg font-medium leading-6">
                <p class="text-xl text-gray-800 group-hover:text-gray-500 lg:text-2xl">
                  How does the private route work?
                </p>
              </p>
              <p class="mt-2 text-lg text-gray-500">
                The private route component is similar to the public route, the
                only change is that redirect URL and authenticate condition. If
                the user is not authenticated he will be redirected to the login
                page and the user can only access the authenticated routes If he
                is authenticated (Logged in).
              </p>
            </div>
          </div>
          <div class="pt-8 sm:flex lg:items-end group">
            <div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
              <img
                class="w-full rounded-md h-32 lg:w-32 object-cover"
                src="../assets/node.png"
                alt="text"
              />
            </div>
            <div>
              <p class="mt-3 text-lg font-medium leading-6">
                <p class="text-xl text-gray-800 group-hover:text-gray-500 lg:text-2xl">
                  What is Node? How does Node work in react?
                </p>
              </p>
              <p class="mt-2 text-lg text-gray-500">
                Node is the most popular platform for hosting and running web
                servers for React apps. After all, using NPM (Node Package
                Manager), you can install any package with NPM command-line
                interface CLI. Moreover, Node utilizes Webpack and other modules
                to turn a React application into an easily compilable single
                file.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
