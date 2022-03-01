import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getFormValue, sendEmail } from '../../action';

const StepFour = (props) => {

    const history = useNavigate();
    const [fromData, setFormData] = useState({})
    const {serviceid, serviceTitle, serviceslug, userFormData} = props.stepData;

    const handleOnChange = e => {
        const { name, value } = e.target;
        setFormData((fromData) => ({ ...fromData, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        userFormData( fromData )
        if( parseInt(serviceid) === 3 ) {
            history(`/steps/5/${serviceid}/${serviceslug}`);
        } else {

            const dbdata = sendEmail();
            console.log('Hello wrld', dbdata)

            history(`/steps/99/${serviceid}/${serviceslug}`);
        }
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
            </form>
        </div>
    )
}

export default StepFour
