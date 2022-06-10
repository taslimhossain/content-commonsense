import React from 'react'
import { Link } from 'react-router-dom';
import Preeloader from '../../Preeloader'
import icon from '../../seo.png';

const Home = () => {
    return (
        <>
            <Preeloader />
            <main>
                <h2 className='section-title section-title-service'> All our<br/>services include  </h2>
                <section className='featured-area'>
                    <div className="featured-item">
                        <img src={icon} alt="content commonsense" />
                        <p>Custom visitor interaction tracking and detailed data report</p>
                    </div>
                    <div className="featured-item">
                        <img src={icon} alt="content commonsense" />
                        <p>Research of the most effective keywords for generating high-quality traffic in your industry</p>
                    </div>
                    <div className="featured-item">
                        <img src={icon} alt="content commonsense" />
                        <p>Constant performance analysis and optimisation that delivers cost-effective leads and growth opportunities</p>
                    </div>
                    <div className="featured-item">
                        <img src={icon} alt="content commonsense" />
                        <p>Monitoring of the digital landscape for new and appropriate opportunities to increase exposure online</p>
                    </div>
                </section>
                <div className="claim-offer"><Link to="services" className='select-offer-btn'>Claim Offer</Link></div>
            </main>
        </>
    )
}

export default Home
