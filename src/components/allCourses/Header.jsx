import Icons from "components/common/Icons";
import React from "react";
import { allCourses } from "../../../site.config";

export default function Hero() {
  return (
    <>
      <section className="section pt-5 pb-0 mt-4">
        <div className="container-fluid mt-md-1 px-0 px-md-3">
          <div
            className="rounded py-5 pb-5 px-3 px-sm-0 shadow-md"
            style={{
              backgroundColor: "#1a274e",
            }}
          >
            <div className="row">
              <div className="container">
                <div className="title-heading text-center">
                  <h1 className="text-white title-dark mb-3">
                    {allCourses.title}
                  </h1>
                  <p className="para-desc mx-auto text-white-50 mb-4">
                    {allCourses.subTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="subcribe-form px-4" style={{ marginTop: -25 }}>
            <form style={{ maxWidth: "800px" }}>
              <div className="form-group">
                <input
                  type="text"
                  id="course"
                  name="name"
                  className="rounded-pill shadow-md bg-white"
                  placeholder={allCourses.searchPlaceholder}
                />
                <button type="submit" className="btn btn-pills btn-primary">
                  <Icons icon="search" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}