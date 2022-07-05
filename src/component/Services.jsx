import React from "react";
import group from "./image/group.png";
import maskgroup22 from "./image/Mask Group 22.png";
import maskgroup25 from "./image/MaskGroup25.png";
import group25 from "./image/Group1170.png";
import group1236 from "./image/Group1236.png";
import group1173 from "./image/Group1173.png";
import group1234 from "./image/Group1234.png";
import group575 from "./image/Group575.png";
import chesslogo from './assets/chess.png';
import { Adress } from './Adress'; 
import { Plant } from './Plant'; 

function Service() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 d-flex align-items-center justify-content-center about">
            <div className="title">
              <h3>SERVICES</h3>
              <h1>PROBACKERS</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12  d-flex align-items-center justify-content-center about_middle m-3">
            <h1>
              OU<span>R</span> KEY STRENGTHS
            </h1>
          </div>
          <div className="col-lg-12  d-flex align-items-center justify-content-center about_middle m-1">
            <h5 className="service_middle_title">
              WE HELP COMPANIES WITH RAISING FUNDS IN A VAST NUMBER OF WAYS TO
              HELP THEM GROW.
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6  d-flex align-items-center justify-content-center ">
            <img
              src={maskgroup25}
              className="img-fluid  maskgroup25"
              alt=" maskgroup25"
            />
          </div>
          <div className="col-lg-6  my-5">
            <div className="fs-3 text-start fundingText">FUNDING</div>
            <div className="about_middle_para justify-content-start my-5">
              <h4 className="fs-5 m-1 text-start equality">Equity Funding</h4>
              <p className="col-lg-8 fs-6 m-1 equalityPara">
                Leveraging our extensive network of investors, we can assist you
                in connecting the ideal investor(s) for your company.
              </p>
              <div />
            </div>
            <div className="about_middle_para justify-content-start my-5">
              <h4 className="fs-5 m-1 text-start equality ">Debt Funding</h4>
              <p className="col-lg-8 fs-6 m-1 equalityPara">
              Secure/unsecured loans from banks, NBFCs, private lenders, overseas lenders/grants.
              </p>
              <div />
            </div>
            <div className="about_middle_para justify-content-start my-5">
              <h4 className="fs-5 m-1 text-start equality ">Project Funding</h4>
              <p className="col-lg-8 fs-6 m-1 equalityPara">
              Raising funds for huge projects from private and public lenders on a case-by-case basis
              </p>
              <div />
            </div>
            <div className="about_middle_para justify-content-start my-5">
              <h4 className="fs-5 m-1 text-start equality ">Financial Instruments</h4>
              <p className="col-lg-8 fs-6 m-1 equalityPara">
              Bill discounting, Line of Credit (LC), SBLC, & Bank Guarantee for both government and non-government tenders
              </p>
              <div />
            </div>
            <div className="about_middle_para justify-content-start my-5">
              <h4 className="fs-5 m-1 text-start equality ">Debt Restructuring</h4>
              <p className="col-lg-8 fs-6 m-1 equalityPara">
              Restructure your debt by raising fresh funds.
              </p>
              <div />
            </div>
          </div>
        </div>

        <div className="row layerChess">
          <div className="col">
            <div>
              <img src={chesslogo} alt='chesslogo' className="imgfluid"/>
            </div>
          </div>
          <div className="col colNnearChess">
            <h1 className="brandText">BRANDING <span>&</span><br/> BUSINESS <br/>DEVELOPMENT</h1>

            <h4 className="">Strategic Alliances</h4>
            <h6>We assist you in choosing partners who will not only help<br/> you to build your business but also increase the value of <br/>your brand.</h6>
          <h4>New Streams of Revenue</h4>
          <h6>Our skilled specialists are smart in identifying income opportunities for your business. We can develop new sources of revenue by using our vast network and experience.</h6>
          <h4>Local & Global Markets</h4>
          <h6>We help start-ups' and companies that create and build their GTM strategy. We encourage companies in executing the defined strategy.</h6>
          <h4>Go-to-Market (GTM)</h4>
          <h6>We help start-ups' and companies that create and build their GTM strategy. We encourage companies in executing the defined strategy.</h6>
          <h4>End to End Channel Development</h4>
          <h6>We develop new network and nurture them on your behalf.</h6>
           

          </div>

        </div>
<div className="row">
<Plant/>
</div>
        <Adress/>
      </div>
    </>
  );
}

export default Service;