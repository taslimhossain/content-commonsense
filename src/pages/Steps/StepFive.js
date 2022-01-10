import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getFormValue } from '../../action';

const StepFive = (props) => {

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
        history(`/steps/6/${serviceid}/${serviceslug}`);
    }

    return (
        <div className="ccform">
            <p>You selected</p>
            <h2 className="package-name">{serviceTitle}</h2>
            <Link to="/" className="change-pacage">Change</Link>
            <form onSubmit={handleSubmit} id="offersubmit">
                <div className="field-row">
                    <label htmlFor="monthlyvisitors" className="form-label">On average, how many unique visitors does your website receive each month?</label>
                    <input type="text" name="monthlyvisitors" defaultValue={getFormValue('monthlyvisitors')} is_required="true" onChange={handleOnChange} className="form-control" id="monthlyvisitors" placeholder="5,000" />
                </div>
                <button className="select-offer-btn btn-submit" type="submit">Next</button>
            </form>
        </div>
    )
}

export default StepFive
