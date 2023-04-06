import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaDesktop,
  FaLaptopMedical,
  FaPager,
  FaSearchengin,
} from "react-icons/fa";

const Services = () => {
  return (
    <div className="hero py-12">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold">Services We Offer</h1>
          <p className="py-6">
            With Braintech you can create beautiful and elegant websites that
            suits your business.
          </p>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-16">
            <div className="card shadow-2xl card-bordered border-primary hover:bg-primary hover:text-white">
              <div className="card-body">
                <FaLaptopCode size={"2em"}></FaLaptopCode>
                <h2 className="card-title text-2xl font-bold">
                  Web Development
                </h2>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
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
                <FaMobileAlt size={"2em"}></FaMobileAlt>
                <h2 className="card-title text-2xl font-bold">
                  Apps Development
                </h2>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
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
                <FaDesktop size={"2em"}></FaDesktop>
                <h2 className="card-title text-2xl font-bold">IT Consulting</h2>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
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
                <FaLaptopMedical size={"2em"}></FaLaptopMedical>
                <h2 className="card-title text-2xl font-bold">
                  Software Maintenance
                </h2>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
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
                <FaPager size={"2em"}></FaPager>
                <h2 className="card-title text-2xl font-bold">
                  Digital Marketing
                </h2>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
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
                <FaSearchengin size={"2em"}></FaSearchengin>
                <h2 className="card-title text-2xl font-bold">Data Analysis</h2>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
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
      </div>
    </div>
  );
};

export default Services;
