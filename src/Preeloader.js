import React from 'react'
import logo from './content-commonsense-logo.png';

const Preeloader = () => {

    setTimeout(function() {
        document.getElementById('preloader').style.visibility = 'hidden'; ;
    }, 1000);

    return (
        <div className='preloader' id='preloader'>
            <img src={logo} alt="content commonsense" />
        </div>
    )
}

export default Preeloader
