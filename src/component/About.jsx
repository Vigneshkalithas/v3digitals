import React from "react";

import group from "./image/group.png";
import maskgroup22 from "./image/Mask Group 22.png";
import group1170 from "./image/Group1170.png";
import group1236 from "./image/Group1236.png";
import group1173 from "./image/Group1173.png";
import group1234 from "./image/Group1234.png";
import { Adress } from "./Adress";

const about = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row about">
          <div className="col-md-12 d-flex align-items-center justify-content-center">
            <div className="title">
              <h3>ABOUT </h3>
              <h1>PROBACKERS</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="about_middle justify-content-start m-5">
              THE TRAVE<span>R</span>SE <br />F<span>A</span>CTOR
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 ">
            <div className="about_middle_para justify-content-start m-5">
              At ProBackers, we empower your businesses to thrive. Our global
              expertise and experience in the business world allow us to guide
              you through difficult situations and help you establish your own
              brand.
              <div />
              <div className="about_middle_para justify-content-start m-5"></div>
              We are supported by a highly qualified team of Legal Advisors,
              Chartered Accountants, Company Secretaries, Mentors from a variety
              of industries, CRM providers, HR Solution providers, and, most
              crucially, Angel Investors, Venture Capitalists, and Investment
              Banking Firms.
            </div>
          </div>
          <div className="col-lg-6  d-flex align-items-center justify-content-center ">
            <img src={group} className="img-fluid group m-5" alt=" group" />
          </div>
        </div>
        <div className="row m-5">
          <div className="col-lg-12  d-flex align-items-center justify-content-center about_middle ">
            <h1>
              OUR CORE TE<span>A</span>M
            </h1>
          </div>
        </div>
        <div className="row m-5">
          <div className="col-lg-3  d-flex align-items-center justify-content-center ">
            <div>
              <img src={maskgroup22} alt=" maskgroup22" />
              <h6 className="text-center m-3"> JAHNAVI REDDY P</h6>
              <h6 className="text-muted text-center">Founder & Director</h6>
            </div>
          </div>
          <div className="col-lg-3  d-flex align-items-center justify-content-center ">
            <div>
              <img src={group1170} alt=" maskgroup22" />
              <h6 className="text-center m-3"> MOHAN REDDY</h6>
              <h6 className="text-muted text-center">CEO</h6>
            </div>
          </div>
          <div className="col-lg-3  d-flex align-items-center justify-content-center ">
            <div>
              <img src={group1173} alt=" maskgroup22" />
              <h6 className="text-center m-3"> DR.SAMEER AZAD MAHENDRA</h6>
              <h6 className="text-muted text-center">Investor & Partner</h6>
            </div>
          </div>
          <div className="col-lg-3  d-flex align-items-center justify-content-center ">
            <div>
              <img src={group1170} alt=" maskgroup22" />
              <h6 className="text-center m-3"> SANJITH VARMA</h6>
              <h6 className="text-muted text-center">
                Head-Business development
              </h6>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center justify-content-center">
          <div className=" col-lg-6  about_msg">
            <div className="fs-4 m-3 text-center ">
              LET THE WORLD KNOW ABOUT YOU!{" "}
            </div>
            <div className="fs-6 m-3 text-center lh-base">
              {" "}
              We are a platform for connecting businesses of <br />
              SMALL TOWNS, RURAL AREAS AND THE BIG
              <br />
              CITIES TO GLOBAL PLATFORMS with STRONG <br />
              INVESTOR AND MENTOR BACKUP.
            </div>
            <div className="fs-6 m-3 text-center lh-lg">
              {" "}
              We are ready to help you take your business from the small town to
              the big city and build their
            </div>
            <div className="fs-1 m-3 text-center lh-lg">BRAND</div>
          </div>
          <div className="col-lg-6  d-flex align-items-center justify-content-center">
            <img
              src={group1236}
              className="img-fluid group1236 m-5"
              alt=" group1236"
            />
          </div>
        </div>
        <div className="row  d-flex align-items-center justify-content-center  about_reachus  my-5">
          <div className="col-lg-3"></div>
          <div className=" col-lg-6 ">
            <div className="about_middle_reachus m-5">
              <h>WHERE <span>A</span> NEW WORLD OF POSSIBILITIES OPENS UP{" "}
              <span>F</span>OR YOU</h>
              
            </div>
            <div className="about_middle_reachus_para m-5">
              You get to meet the people who share your vision and believe in
              your dream. You get to connect with like-minded individuals who
              can help you achieve your goals. You get to access the resources
              and tools you need to succeed.
            </div>
            <div>
              <button type="button" className="btn btn-light ">
                REACH US
              </button>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
        <Adress/>
        </div>
    </>
  );
};

export default about;