import React from 'react';
import layer1 from './assets/Layer1.svg';
import layer2 from './assets/Layer2.svg';
import unicorn from './assets/unicorn.svg';
import connect from "./assets/connect.png";
import logo from "./assets/Group 576.svg";
import avatar1 from "./assets/avatar2.svg";
import avatar2 from "./assets/avatar5.svg";
import avatar3 from "./assets/avatar4.svg";
import avatar4 from "./assets/avatar3.svg";
import { ReachUsButton } from './ReachUsButton';
import { Card } from './Card';
import { Adress } from "./Adress";
import { Plant } from './Plant';



const Home = () => {

  const ownerDatas = [
    {
      image: avatar1,
      name:"JAHNAVI REDDY P",
      post:"Founder & Director",
    },
    {
      image: avatar2,
      name:"MOHAN REDDY",
      post:"CEO",
    },
    {
      image: avatar3,
      name:"DR. SAMEER AZAD MAHENDRA",
      post:"Investor & Partner",
    },
    {
      image: avatar4,
      name:"SANJITH VARMA",
      post:"Head - Business development",
    },
  ]
  return (

   <>
   <section className='container-fluid home-conteiner'>
    < div className='row'>
      <div className='homeRow'>
      <h3 className='dreams'>WE TURN YOUR DREAMS</h3>
      <h3 className='reality'>INTO A REALITY</h3>
      </div>
      
    </div>
   </section>

   <section className='container-fluid mt-4 mb-5'>
<div className='row mx-auto d-flex justify-content-center align-items-center'>
  <div className='col mx-auto'>
    <img src={layer1} alt="layer1" className='img-fluid layer-1' />
    
  </div>
  <div className='col mx-auto'>
    <div>
      <h3 className='people'>PEOPLE <span className='connect'>CONNECT</span></h3>
      <h6 className='mt-4 para-at-pro'>AT PRO BACKERS, WE EMPOWER YOUR BUSINESSES TO THRIVE.</h6>
      <h6 className='mt-4 para-our'>Our global expertise and experience in the business world allow us to guide you through difficult situations and help you establish your own brand.</h6>
      <h6 className='mt-4 para-our'>
      We are supported by a highly qualified team of Legal Advisors,Chartered Accountants, Company Secretaries, Mentors from a variety of industries, CRM providers, HR Solution providers, and, most crucially, Angel Investors, Venture Capitalists, and Investment Banking Firms.
    
        </h6>  

    </div>
  </div>
</div>
   </section>


   <section className='container-fluid mb-5 mt-5'>
    <div className='row d-flex align-items-center mt-3'>
      <div className='col mx-auto layer2'>
        <div className='mt-5 mx-auto mb-4'>
        <h2 className='smes'>SMEs</h2>
        <h6 className='mt-3'>Any promising SME which is looking forward to<br/> expand further nationally and globally can benefit.</h6>
        </div>
        <div className='mt-5 mb-4 mx-auto'>
          <h2 className='smes'>START UPs</h2>
          <h6 className='mt-3'>A new idea or established startup, trying to enter<br/> into new horizon can partner with us.</h6>
        </div>
        <div className='mt-5 mb-4 mx-auto'>
          <h2 className='smes'>BUSINESS ENTERPRISES</h2>
          <h6 className='mt-3'>
          An established organisation dreaming to go global<br/> and fly high, we have your back!
          </h6>
        </div>
        
      </div>
      <div className='col'>
        <div>
          <img src={layer2} alt='layer2' className='mx-auto img-fluid layer-2'/>
        </div>
      </div>
    </div>
   </section>

   <section className='container-fluid mt-5 layer3'>
    <div className='row'>
      <div className='layer3-row'>
      <h3 className='join'>Join Us To Be A Part Of The Next</h3>
      <h3 className='reality'>UNICORN STORY!</h3>
      <div className='mt-5'>
      <img src={unicorn} alt="unicorn" className='img-fluid unicorn'/>
      </div>

      </div>

    </div>
   </section>
   

   <section className='container-fluid mb-5'>
    <div className='row d-flex align-items-center'>
      <div className="col mx-4">
      <div>
          <h1 className='our-service'>OUR <span className='service-inner'>SERVICES</span></h1>
        </div>
        <div className='my-5'>
          <h4 className='fundtext'>FUNDING</h4>
          <h6 className='raisetext'>Raise funds for business growth in a range of ways,<br/> including equity and debt.</h6>
        </div>

        <div className='my-5'>
          <h4 className='fundtext'>BRANDING & BUSINESS DEVELOPMENT</h4>
          <h6 className='raisetext'>Provide the best branding strategies and<br/> empower businesses to grow exponentially.</h6>
        </div>

      </div>
      <div className="col mx-4"> 
        <div className='my-5'>
          <h4 className='fundtext'>LEGAL, ACCOUNTING AND COMPANY REGULATORY SERVICES</h4>
          <h6 className='raisetext'>Provide a one-stop destination for businesses to get the best legal advice on GST, service taxes, accounting services, & company regulatory services for a hassle-free work process.</h6>
        </div>
        <div className='my-5'>
        <h4 className='fundtext'>MENTORING & ADVISORY</h4>
          <h6 className='raisetext'>Our expert backers will be accessible to companies at every milestone of the Journey to guide them, showing them the best methods, and guide them in achieving the target.</h6>

        </div>
        <div className='my-5'>
        <h4 className='fundtext'>NETWORKING</h4>
          <h6 className='raisetext'>Provide the strongest platform for commercial brains, investors, & entrepreneurs to network and explore outstanding growth plans.</h6>

        </div>
        
      </div>
    </div>
   </section>

   <section className="container-fluid layer4Container">

    <div className="row">

      <div className="col mx-4">
        <div className='mx-auto'>
          <img src={connect} alt="connect" className='img-fluid layer4'></img>
        </div>
      </div>
      <div className="col mx-4">
        
          <h1 className='global'>GLOBAL <span className='global-connect'>CONNECT</span></h1>
        
        <div className='mt-4'>
          <h6 className="global-para">
          Are you a founder who is looking to raise funding? Are you looking for investors to invest in your start-ups, small and medium businesses or non-profit organization? Pro Backers is the place to be. We are here to connect you with genuine investors looking at investing in your ideas for the future. Our ecosystem is built to overcome fraudulent middlemen, highlight alacrity as a key success factor and connect startup founders with genuine funders based on trust, accountability and transparency.
          </h6>
        </div>
      </div>
    </div>
       
   </section>


   <section className='container-fluid layer5'>
<div className="row">
  <div className="col">
    <div className="row">
      <img src={logo} alt="logo" className='img-fluid page-logo'/>
    </div>
    <div className="row">
      <h1 className='wheretext'>Where A New World Of Possibilities</h1>
    </div>
    <div className="row">
      <h1 className='textopen'>OPENS UP FOR YOU</h1>
    </div>
<ReachUsButton/>
  </div>
 
</div>

   </section>

   <section className='container-fluid'>
    <div className="row owenerRow">
      <h2 className='ourTeamText'>OUR CORE <span className='team'>TEAM</span></h2>
      <div className="row mx-auto  my-5">
        {
          ownerDatas.map((data, index) => {
            return(     
               <div className="col" key={index}>
            <div className='avatar'>
              <img src={data.image} alt='avatar1' className='img-fluid'/>
              <h5 className='textowners'>{data.name}</h5>
              <h6>{data.post}</h6>
            </div>
          </div>)
          })
        }


      
      </div>
      <a>
      <h6 className='text-center view-all-team'>VIEW ALL TEAM</h6>
      </a>
      
    </div>

   </section>

   <section className='cotainer-fluid mt-5 layer6'>
    <div className="row">
      <div className='layer5Row'>
      <h1 className='mission-text'>We’re On A Mission</h1>
      <h1 className='text-to-make'>To Make Legal & Corporate Law</h1>
      <h1 className='mission-text'>More Accessible, Simple, And Affordable.</h1>
      <ReachUsButton/>
      </div>
    </div>
   </section>

   <section className='container-fluid mb-5'>
<div className="row mb-5">
<h2 className='ourTeamText'>LATEST<span className='team'>NEWS</span></h2>
</div>

<div className="row mx-5">
<Card/>
<Card/>
<Card/>
</div>
<div className='d-flex justify-content-end align-items-end'>
<h6 className='view-all'>VIEW ALL</h6>  
</div>

  
   </section>
  
  <section className='container-fluid layer8'>
    <div className="row">

      <div className='layer8row'>

      <div>
      <h1 className='lets-start-with mb-0'>Lets Start With Us,</h1>
      <h1 className='lets-start-with mb-0'><span className='text-tomorrow'>TOMORROW'S </span>Most Innovative Ideas!</h1>
      <div className='d-flex my-4'>
        <input type="email" placeholder="Enter your email address" className='input-email'/>
        <button className='btn mx-5 btn-send'>SEND US</button>
      

      </div>
      </div>
        


     

    </div>
    </div>
    
  </section>

  <section className='container-fluid'>
  <div className='row adressRow'>
    <Adress/>
    </div>
 
  </section>

  <section className='container-fluid layer9'>
<div className="row layer9Row">
  <div>
  <h1 className='weText'>We Are Here</h1>
  <h1 className='toText'>To Connect Your Network</h1>
  <h1 className='withText'>With Global Leaders</h1>
  <div className='ms-2'>
  <ReachUsButton/>

  </div>
  </div>


</div>
  </section>
<Plant/>

   </>
  );
};


export default Home;