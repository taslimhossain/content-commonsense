import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getFormValue } from '../../action';

const StepTwo = (props) => {

    const [fromData, setFormData] = useState({})
    const history = useNavigate();
    const {serviceid, serviceTitle, serviceslug, userFormData} = props.stepData;

    const handleOnChange = e => {
        const { name, value } = e.target;
        setFormData((fromData) => ({ ...fromData, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        userFormData( fromData )
        history(`/steps/3/${serviceid}/${serviceslug}`);
    }

    return (
        <div className="ccform">
            <p>You selected</p>
            <h2 className="package-name">{serviceTitle}</h2>
            <Link to="/services" className="change-pacage">Change</Link>
            <form onSubmit={handleSubmit} id="offersubmit">
                <div className="field-row">
                    <label htmlFor="useremail" className="form-label">What is your email address? *</label>
                    <input type="email" name="useremail" defaultValue={getFormValue('useremail')} onChange={handleOnChange} className="form-control" id="useremail" placeholder="name@domain.com" required />
                </div>
                <div className="field-row">
                    <label htmlFor="usermobile" className="form-label">What is your phone number? *</label>
                    <input type="text" name="usermobile" defaultValue={getFormValue('usermobile')} onChange={handleOnChange} className="form-control" id="usermobile" placeholder="0123 456 7890" required/>
                </div>
                <button className="select-offer-btn btn-submit" type="submit">Next</button>
            </form>
        </div>
    )
}

export default StepTwo
