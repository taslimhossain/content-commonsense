import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getFormValue } from '../../action';

const StepOne = (props) => {

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
        history(`/steps/2/${serviceid}/${serviceslug}`);
    }

    return (
        <>
        <div className="ccform">
            <p className="you-selected">You selected</p>
            <h2 className="package-name">{serviceTitle}</h2>
            <Link to="/services" className="change-pacage">Change</Link>
            <p className='ccfrom-small-title'>So we can get started, please enter some contact details below</p>
            <form onSubmit={handleSubmit} id="offersubmit">
                <div className="field-row">
                    <label htmlFor="username" className="form-label">What is your name? <span className='required_star'>*</span> </label>
                    <input type="text" name="username" defaultValue={getFormValue('username')} is_required="true" onChange={handleOnChange} className="form-control" id="username" placeholder="Full name" required />
                </div>
                <button className="select-offer-btn btn-submit" type="submit">Next</button>
            </form>
        </div>
        </>
    )
}

export default StepOne
