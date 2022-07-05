import React from "react";
import group575 from "./image/Group575.png";
import { RiFacebookFill } from 'react-icons/ri';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';

export function Adress() {

  return (
    <>
      <div className="row  m-5 ">
        <div className="col-lg-12 d-flex justify-content-evenly ">
          <div className=" m-5 ">
            <h6 className="text-end">REACH US</h6>
            <p className="text-end">
              Level 6, N Heights, <br />
              Plot no 38, Phase 2, <br />
              Hitech City, Hyderabad
            </p>
          </div>
          <div>
            <img
              src={group575}
              className="img-fluid group575 m-5 "
              alt=" group575" />
          </div>

          <div className=" m-5 ">
            <h6 className="text-start">CONTACT</h6>
            <p className="text-start">
              +91 9626511458 <br />
              www.probackers.in <br />
              conatct@probackers.in
            </p>
          </div>
        </div>
      </div>
      <div className="row mx-4">

        <div className="col copy-rights">
          <h6>© PROBACKERS 2022 | Designed by V3 Digitals</h6></div>
        <div className="col mx-5 social-media">
          <div className="mx-2"><RiFacebookFill/></div>
          <div className="mx-2"><RiLinkedinFill/></div>
          <div className="mx-2"><AiOutlineInstagram/></div>
          <div className="mx-2"><AiOutlineTwitter/></div>
        </div>
      </div>

    </>
  );
}
