import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Popup from 'reactjs-popup';


const Services = () => {
 
        const settings = {
          className: "cc-slider",
          dots: true,
          draggable: true,
          infinite: false,
          arrows: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
        return (
          <>
            <h2 className='section-title'> Choose </h2>
            <Slider {...settings}>
             
              <div className='service-item'>
                <h2>2 Months Free Account Management</h2>
                <Popup trigger={<button className="button learn-more-btn"> Learn More </button>} modal nested >
                  {close => (
                    <div className="modal">
                      <button className="close" onClick={close}> <img src="/images/close.svg"/> </button>
                      <div className="header"> 2 Months Free Account Management </div>
                      <div className="content">
                        <p> We bet on ourselves to deliver results that prove our value as a partner within 3 months. </p>
                        <p>So much so, that we will give you 2 months of them for free! </p>
                        <p>Our only condition is that you already have a website that does its job. </p>
                        <p>If we send the best traffic in the world to a bad website... results will be mediocre.</p>
                        <p>But if you have a website that generates leads but needs a few tweaks and some great traffic, let's go!</p>
                        <a href="hell" className='select-offer-btn'>I Want This!</a>
                      </div>
                    </div>
                  )}
                </Popup>
                <Link to="steps/1/1/2-months-free-account-management" className='select-offer-btn'>Select Offer</Link>
              </div>

              <div className='service-item'>
                <h2>Completely Free Custom Built & Optimised Website</h2>
                <Popup trigger={<button className="button learn-more-btn"> Learn More </button>} modal nested >
                  {close => (
                    <div className="modal">
                      <button className="close" onClick={close}> <img src="/images/close.svg"/> </button>
                      <div className="header"> Completely Free Custom Built & Optimised Website </div>
                      <div className="content">
                        <p> We bet on ourselves to deliver results that prove our value as a partner within 3 months. </p>
                        <p>So much so, that we will give you 2 months of them for free!</p>
                        <p>Our only condition is that you already have a website that does its job.</p>
                        <p>If we send the best traffic in the world to a bad website... results will be mediocre.</p>
                        <p>But if you have a website that generates leads but needs a few tweaks and some great traffic, let's go!</p> 
                        <a href="hell" className='select-offer-btn'>I Want This!</a>
                      </div>
                    </div>
                  )}
                </Popup>
                <Link to="steps/1/2/completely-free-custom-built-&-optimised-website" className='select-offer-btn'>Select Offer</Link>
              </div>


              <div className='service-item'>
                <h2>Only Pay For Leads You Receive (No Management Fee)</h2>
                <Popup trigger={<button className="button learn-more-btn"> Learn More </button>} modal nested >
                  {close => (
                    <div className="modal">
                      <button className="close" onClick={close}> <img src="/images/close.svg"/> </button>
                      <div className="header"> Only Pay For Leads You Receive (No Management Fee) </div>
                      <div className="content">
                        <p>We bet on ourselves to deliver results that prove our value as a partner within 3 months. </p>
                        <p>So much so, that we will give you 2 months of them for free!</p>
                        <p>Our only condition is that you already have a website that does its job.</p>
                        <p>If we send the best traffic in the world to a bad website... results will be mediocre.</p>
                        <p>But if you have a website that generates leads but needs a few tweaks and some great traffic, let's go!</p>
                        <a href="hell" className='select-offer-btn'>I Want This!</a>
                      </div>
                    </div>
                  )}
                </Popup>
                <Link to="steps/1/3/only-pay-for-leads-you-receive" className='select-offer-btn'>Select Offer</Link>
              </div>

            </Slider>
          </>
        );
    
}

export default Services
