import Icons from "components/common/Icons";
import { useRouter } from "next/router";
import React from "react";
import { hero } from "../../../site.config";
import YouTube from "react-youtube";
import Vimeo from "@u-wave/react-vimeo";

export default function Hero() {
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    const word = document.getElementById("search-box").value;
    router.push(`/${"search"}?word=${word}`);
  };

  return (
    <section className="section pt-5 pb-0 mt-4">
      <div className="container-fluid mt-md-1 px-0 px-md-3">
        <div className="rounded bg-light py-5 px-3 px-sm-0 shadow-md">
          <div className="row">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 col-12">
                  <div className="title-heading mr-lg-4">
                    <h1 className="h2  mb-3">
                      {hero.mainTitle}
                      {/* <span className="text-primary">: cursos-online.com</span> */}
                    </h1>
                    <p className="para-desc text-muted">{hero.subTitle}</p>
                    <div className="subcribe-form mt-4 pt-2">
                      <form className="m-0" onSubmit={submitHandler}>
                        <div className="form-group">
                          <input
                            type="text"
                            id="search-box"
                            name="name"
                            className="text-dark rounded shadow-md pl-3"
                            placeholder={hero.searchPlaceholder}
                          />
                          <button type="submit" className="btn btn-primary">
                            <Icons
                              icon="search"
                              className="fa-x1"
                              style={{
                                fontSize: "16px",
                              }}
                            />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div
                    className="video-container shadow-md"
                    style={{ height: "315px" }}
                  >
                    <Vimeo
                      height="420"
                      width="720"
                      showByline={false}
                      showPortrait={false}
                      controls={false}
                      video={hero.VimeoVideoId}
                      autoplay={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
