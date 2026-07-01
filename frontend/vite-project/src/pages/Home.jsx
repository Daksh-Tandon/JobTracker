import React from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import image from "../assets/image.png";

const Home = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gray-50">
      <NavBar />

      <div className="max-w-7xl mx-auto px-6 pt-28">

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Left Section */}
          <div className="flex-1 text-center">

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Find Your <span className="text-blue-600">Dream Job</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Search thousands of jobs from top companies and start your career today.
            </p>

            <div className="mt-8">
              <SearchBar />
            </div>

          </div>

          {/* Right Section */}
          <div className="flex justify-center">
            <img
              src={image}
              alt="Job Portal"
              className="w-full max-w-lg"
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;