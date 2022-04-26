import Image from "next/image";
import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import insta1 from "../assets/img/instagram-1.png";
import insta2 from "../assets/img/instagram-2.png";
import insta3 from "../assets/img/instagram-3.png";
import insta4 from "../assets/img/instagram-4.png";
import insta5 from "../assets/img/instagram-5.png";

const InstagramDesign = ({ finalCroppedImage }) => {
  return (
    <TransitionGroup>
      <div className="p-0  position-relative">
        <div className="row">
          <div className="col-lg-6 col-md-12 d-lg-block d-flex flex-column justify-content-center align-items-center pb-4 instagram-design">
            <div className="position-relative m-0  align-items-center">
              <Image src={insta1} alt="" className="image" />
              {finalCroppedImage != null && finalCroppedImage !== "" && (
                <CSSTransition
                  in={finalCroppedImage != null && finalCroppedImage !== ""}
                  timeout={700}
                  classNames="fade"
                >
                  <Image
                    src={finalCroppedImage}
                    alt=""
                    className="instagram_design-profile1"
                  />
                </CSSTransition>
              )}
            </div>
            <div className="position-relative ">
              <Image src={insta5} alt="" className="image" />
              {finalCroppedImage != null && finalCroppedImage !== "" && (
                <>
                  <CSSTransition
                    in={finalCroppedImage != null && finalCroppedImage !== ""}
                    timeout={700}
                    classNames="fade"
                  >
                    <Image
                      src={finalCroppedImage}
                      alt=""
                      className="instagram_design-profile2"
                    />
                  </CSSTransition>
                  <CSSTransition
                    in={finalCroppedImage != null && finalCroppedImage !== ""}
                    timeout={700}
                    classNames="fade"
                  >
                    <Image
                      src={finalCroppedImage}
                      alt=""
                      className="instagram_design-profile3"
                    />
                  </CSSTransition>
                </>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-12 instagram_design align-items-xl-end align-items-center instagram-design">
            <div className="p-4 position-relative">
              <Image
                src={insta2}
                alt=""
                className="instagram_design-base1 image"
              />
              {finalCroppedImage != null && finalCroppedImage !== "" && (
                <CSSTransition
                  in={finalCroppedImage != null && finalCroppedImage !== ""}
                  timeout={700}
                  classNames="fade"
                >
                  <Image
                    src={finalCroppedImage}
                    alt=""
                    className="instagram_design-profile4"
                  />
                </CSSTransition>
              )}
            </div>
            <div className="p-4 position-relative">
              <Image
                src={insta3}
                alt=""
                className="instagram_design-base2 image"
              />
              {finalCroppedImage != null && finalCroppedImage !== "" && (
                <CSSTransition
                  in={finalCroppedImage != null && finalCroppedImage !== ""}
                  timeout={700}
                  classNames="fade"
                >
                  <Image
                    src={finalCroppedImage}
                    alt=""
                    className="instagram_design-profile5"
                  />
                </CSSTransition>
              )}
            </div>
            <div className="p-2 position-relative">
              <Image
                src={insta4}
                alt=""
                className="instagram_design-base3 image"
              />
              {finalCroppedImage != null && finalCroppedImage !== "" && (
                <CSSTransition
                  in={finalCroppedImage != null && finalCroppedImage !== ""}
                  timeout={700}
                  classNames="fade"
                >
                  <Image
                    src={finalCroppedImage}
                    alt=""
                    className="instagram_design-profile6"
                  />
                </CSSTransition>
              )}
            </div>
          </div>
        </div>
      </div>
    </TransitionGroup>
  );
};

export default InstagramDesign;
