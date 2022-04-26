import Image from "next/image";
import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import whatsapp1 from "../assets/img/whatsapp-1.png";
import whatsapp2 from "../assets/img/whatsapp-2.png";
import whatsapp3 from "../assets/img/whatsapp-3.png";
import whatsapp4 from "../assets/img/whatsapp-4.png";

const WhatsappDesign = ({ finalCroppedImage }) => {
  return (
    <TransitionGroup>
      <div className="p-0  position-relative">
        <div className="row">
          <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center my-4 whatsapp-design">
            <div className="position-relative m-0  align-items-center">
              <Image src={whatsapp1} className="whatsapp_design-base1" alt="" />
              {finalCroppedImage != null && finalCroppedImage !== "" && (
                <CSSTransition
                  in={finalCroppedImage != null && finalCroppedImage !== ""}
                  timeout={700}
                  classNames="fade"
                >
                  <Image
                    src={finalCroppedImage}
                    alt=""
                    className="whatsapp_design-profile1"
                  />
                </CSSTransition>
              )}

              {finalCroppedImage != null && finalCroppedImage !== "" && (
                <CSSTransition
                  in={finalCroppedImage != null && finalCroppedImage !== ""}
                  timeout={700}
                  classNames="fade"
                >
                  <Image
                    src={finalCroppedImage}
                    alt=""
                    className="whatsapp_design-profile2"
                  />
                </CSSTransition>
              )}
            </div>
            <div className="pt-4 position-relative ">
              <Image src={whatsapp2} className="whatsapp_design-base2" alt="" />
              {finalCroppedImage != null && finalCroppedImage !== "" && (
                <CSSTransition
                  in={finalCroppedImage != null && finalCroppedImage !== ""}
                  timeout={700}
                  classNames="fade"
                >
                  <Image
                    src={finalCroppedImage}
                    alt=""
                    className="whatsapp_design-profile3"
                  />
                </CSSTransition>
              )}
            </div>
          </div>

          <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center my-4 whatsapp-design">
            <div className="position-relative">
              <Image src={whatsapp4} alt="" className="whatsapp_design-base3" />
              {finalCroppedImage != null && finalCroppedImage !== "" && (
                <CSSTransition
                  in={finalCroppedImage != null && finalCroppedImage !== ""}
                  timeout={700}
                  classNames="fade"
                >
                  <Image
                    src={finalCroppedImage}
                    alt=""
                    className="whatsapp_design-profile4"
                  />
                </CSSTransition>
              )}
            </div>
            <div className="pt-4 position-relative">
              <Image src={whatsapp3} className="whatsapp_design-base4" alt="" />
              {finalCroppedImage != null && finalCroppedImage !== "" && (
                <CSSTransition
                  in={finalCroppedImage != null && finalCroppedImage !== ""}
                  timeout={700}
                  classNames="fade"
                >
                  <Image
                    src={finalCroppedImage}
                    alt=""
                    className="whatsapp_design-profile5"
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

export default WhatsappDesign;
