import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getFormValue } from '../../action';

const StepEleven = (props) => {

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
        history(`/steps/99/${serviceid}/${serviceslug}`);
    }

    return (
        <div className="ccform">
            <p className="you-selected">You selected</p>
            <h2 className="package-name">{serviceTitle}</h2>
            <Link to="/services" className="change-pacage">Change</Link>
            <form onSubmit={handleSubmit} id="offersubmit">
                <div className="field-row">
                    <label htmlFor="campaignslocation" className="form-label">Which geographic locations do you serve/should we target with your advertising campaigns?</label>
                    <input type="text" name="campaignslocation" defaultValue={getFormValue('campaignslocation')} is_required="true" onChange={handleOnChange} className="form-control" id="campaignslocation" placeholder="Geographic locations" />
                </div>
                <button className="select-offer-btn btn-submit" type="submit">Next</button>
            </form>
        </div>
    )
}

export default StepEleven
