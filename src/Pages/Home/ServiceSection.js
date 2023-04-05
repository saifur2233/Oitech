import React from "react";
import { FaLaptopCode } from "react-icons/fa";

const ServiceSection = () => {
  return (
    <div className="pb-12">
      <div className="hero">
        <div className="hero-content flex flex-col lg:flex-row">
          <div>
            <p className="font-bold text-primary">SERVICES</p>
            <h1 className="text-5xl font-bold">Services We Offer</h1>
            <p className="py-6">
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Omnis Id
              Atque Dignissimos Repellat Quae Ullam.
            </p>
          </div>
          <div>
            <button className="btn btn-primary">See All Services</button>
          </div>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-16">
        <div className="card shadow-2xl card-bordered border-primary hover:bg-primary hover:text-white">
          <div className="card-body">
            <FaLaptopCode size={"2em"}></FaLaptopCode>
            <h2 className="card-title text-2xl font-bold">Web Development</h2>
            <p>
              Lorem ipsum dolor sit amet consecltetur adipisicing elit. Omnis
              tempore perfe rendis explicabo.
            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-link hover:text-white">
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className="card shadow-2xl card-bordered border-primary hover:bg-primary hover:text-white">
          <div className="card-body">
            <FaLaptopCode size={"2em"}></FaLaptopCode>
            <h2 className="card-title text-2xl font-bold">Web Development</h2>
            <p>
              Lorem ipsum dolor sit amet consecltetur adipisicing elit. Omnis
              tempore perfe rendis explicabo.
            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-link hover:text-white">
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className="card shadow-2xl card-bordered border-primary hover:bg-primary hover:text-white">
          <div className="card-body">
            <FaLaptopCode size={"2em"}></FaLaptopCode>
            <h2 className="card-title text-2xl font-bold">Web Development</h2>
            <p>
              Lorem ipsum dolor sit amet consecltetur adipisicing elit. Omnis
              tempore perfe rendis explicabo.
            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-link hover:text-white">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
