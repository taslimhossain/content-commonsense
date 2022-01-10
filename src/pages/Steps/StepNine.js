import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getFormValue } from '../../action';

const StepNine = (props) => {

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
        history(`/steps/10/${serviceid}/${serviceslug}`);
    }

    return (
        <div className="ccform">
            <p>You selected</p>
            <h2 className="package-name">{serviceTitle}</h2>
            <Link to="/" className="change-pacage">Change</Link>
            <form onSubmit={handleSubmit} id="offersubmit">
                <div className="field-row">
                    <label htmlFor="targetleads" className="form-label">What do you feel is a realistic target volume of leads to achieve in a month?</label>
                    <input type="text" name="targetleads" defaultValue={getFormValue('targetleads')} is_required="true" onChange={handleOnChange} className="form-control" id="targetleads" placeholder="target number of leads" />
                </div>
                <button className="select-offer-btn btn-submit" type="submit">Next</button>
            </form>
        </div>
    )
}

export default StepNine
