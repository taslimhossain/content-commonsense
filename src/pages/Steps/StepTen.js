import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getFormValue } from '../../action';

const StepTen = (props) => {

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
        history(`/steps/11/${serviceid}/${serviceslug}`);
    }

    return (
        <div className="ccform">
            <p className="you-selected">You selected</p>
            <h2 className="package-name">{serviceTitle}</h2>
            <Link to="/services" className="change-pacage">Change</Link>
            <form onSubmit={handleSubmit} id="offersubmit">
                <div className="field-row">
                    <label htmlFor="monthlybudget" className="form-label">What is your proposed advertising budget for each month?</label>
                    <input type="text" name="monthlybudget" defaultValue={getFormValue('monthlybudget')} is_required="true" onChange={handleOnChange} className="form-control" id="monthlybudget" placeholder="monthly advertising budget in £GBP" />
                </div>
                <button className="select-offer-btn btn-submit" type="submit">Next</button>
            </form>
        </div>
    )
}

export default StepTen
