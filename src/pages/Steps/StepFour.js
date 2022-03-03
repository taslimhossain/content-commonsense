import axios from "axios";
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getFormValue, SendEmail } from '../../action';

const StepFour = (props) => {

    const history = useNavigate();
    const [formError, setformError] = useState('No Error')
    const [fromData, setFormData] = useState({})
    const [emailStatus, setEmailStatus] = useState(true)
    const {serviceid, serviceTitle, serviceslug, userFormData, handleEmailSubmit, sendLoading} = props.stepData;

    const handleOnChange = e => {
        const { name, value } = e.target;
        setFormData((fromData) => ({ ...fromData, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        userFormData( fromData );
        handleEmailSubmit(e);
    }

    return (
        <div className="ccform">
            <p className="you-selected">You selected</p>
            <h2 className="package-name">{serviceTitle}</h2>
            <Link to="/services" className="change-pacage">Change</Link>

            <form onSubmit={handleSubmit} id="offersubmit">
                <div className="field-row">
                    <label htmlFor="companyname" className="form-label">What is your company called? <span className='required_star'>*</span></label>
                    <input type="text" name="companyname" defaultValue={getFormValue('companyname')} onChange={handleOnChange} className="form-control" id="companyname" placeholder="company name" required/>
                </div>
                <div className="field-row">
                    <label htmlFor="industry" className="form-label">What industry do you operate in? <span className='required_star'>*</span></label>
                    <input type="text" name="industry" defaultValue={getFormValue('industry')} onChange={handleOnChange} className="form-control" id="industry" placeholder="industry" required />
                </div>
                <button className="select-offer-btn btn-submit" type="submit"> { parseInt(serviceid) === 3 ? 'Next' : 'Claim Offer' }  </button>
                <p>{sendLoading}</p>
            </form>
        </div>
    )
}

export default StepFour
