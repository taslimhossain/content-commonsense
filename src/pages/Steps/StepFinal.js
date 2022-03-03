import React from 'react'
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

const StepFinal = (props) => {

    return (
        <div className="ccform">
            <h2 className="package-name">Congratulations!</h2>
            <p className='congratulations-description'>You have successfully claimed your offer and a member of our on-boarding team will be in touch with you shortly to get you on the way to generating more leads through your website!</p>
            
            <div id="offersubmit">
                <h5>If you have any friends or partners that may benefit from one of our offers...</h5>
                

                <Popup trigger={<button className="select-offer-btn btn-submit" type="submit">Share</button>} modal nested >
                  {close => (
                    <div className="modal">
                      <button className="close" onClick={close}> <img src="/images/close.svg"/> </button>
                      <div className="content social-share">
                      
                        <a target="_blank" href="mailto:?&subject=Content commonsense&body=https://minisite.taslimhossain.com" className='fa fa-envelope'></a>
                        <a target="_blank" href="https://api.whatsapp.com/send?text=Content commonsense%0ahttps://minisite.taslimhossain.com" className='fa fa-whatsapp'></a>
                        <a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=https://minisite.taslimhossain.com&title=Content commonsense&summary=Content commonsense&source=" className='fa fa-linkedin'></a>
                      </div>
                    </div>
                  )}
                </Popup>

            </div>
           



        </div>
    )
}

export default StepFinal
