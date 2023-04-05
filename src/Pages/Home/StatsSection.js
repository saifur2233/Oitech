import React from "react";
import { FaWhmcs } from "react-icons/fa";

const StatsSection = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url("https://i.ibb.co/93VgFBz/pattern-bg-3.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="p-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="card card-bordered border-t-4 rounded-b-lg border-primary text-neutral-content">
            <div className="card-body items-center text-center text-white ">
              <FaWhmcs color="primary" size={"3em"}></FaWhmcs>
              <h2 className="card-title font-bold text-5xl">750+</h2>
              <p className="text-xl">Finished Projects</p>
            </div>
          </div>
          <div className="card card-bordered border-t-4 rounded-b-lg border-primary text-neutral-content">
            <div className="card-body items-center text-center text-white ">
              <FaWhmcs color="primary" size={"3em"}></FaWhmcs>
              <h2 className="card-title font-bold text-5xl">750+</h2>
              <p className="text-xl">Finished Projects</p>
            </div>
          </div>
          <div className="card card-bordered border-t-4 rounded-b-lg border-primary text-neutral-content">
            <div className="card-body items-center text-center text-white ">
              <FaWhmcs color="primary" size={"3em"}></FaWhmcs>
              <h2 className="card-title font-bold text-5xl">750+</h2>
              <p className="text-xl">Finished Projects</p>
            </div>
          </div>
          <div className="card card-bordered border-t-4 rounded-b-lg border-primary text-neutral-content">
            <div className="card-body items-center text-center text-white ">
              <FaWhmcs color="primary" size={"3em"}></FaWhmcs>
              <h2 className="card-title font-bold text-5xl">750+</h2>
              <p className="text-xl">Finished Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
