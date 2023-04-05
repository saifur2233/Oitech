import React from "react";

const QuestionSection = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="py-12">
          <h1 className="text-5xl font-bold">
            Have Any Questions? Let's Answer Them
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <form>
            <div className="flex gap-4">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-primary font-bold">
                    Name <strong className="text-error">*</strong>
                  </span>
                </label>
                <input
                  type="text"
                  required
                  className="input input-bordered border-primary"
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-bold text-primary">
                    Email <strong className="text-error">*</strong>
                  </span>
                </label>
                <input
                  type="email"
                  required
                  className="input input-bordered border-primary"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-primary">
                  Subject <strong className="text-error">*</strong>
                </span>
              </label>
              <input
                type="text"
                required
                className="input input-bordered border-primary"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-primary font-bold">
                  Message <strong className="text-error">*</strong>
                </span>
              </label>

              <textarea
                required
                className="textarea textarea-bordered border-primary textarea-lg w-full"
              ></textarea>
            </div>
            <button className="my-6 btn btn-wide btn-primary">
              Send Your Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
