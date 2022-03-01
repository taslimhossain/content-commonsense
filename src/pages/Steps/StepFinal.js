import React from 'react'

const StepFinal = (props) => {

    return (
        <div className="ccform">
            <h2 className="package-name">Congratulations!</h2>
            <p className='congratulations-description'>You have successfully claimed your offer and a member of our on-boarding team will be in touch with you shortly to get you on the way to generating more leads through your website!</p>
            
            <form id="offersubmit">
                <h5>If you have any friends or partners that may benefit from one of our offers...</h5>
                <button className="select-offer-btn btn-submit" type="submit">Share</button>
            </form>
        </div>
    )
}

export default StepFinal
