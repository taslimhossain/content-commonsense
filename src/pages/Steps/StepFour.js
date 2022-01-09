import React, { useContext, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FormDataContext } from '../../contexts/FormData/FormDataProvider';


const StepFour = (props) => {
    const {ahandleOnChange} = useContext(FormDataContext);
    const history = useNavigate();

    const {id, tite, slug} = props.stepData
    const serviceTitle = tite != '' ? tite : '';
    const [fromData, setFormData] = useState({})
    const handleOnChange = e => {
        const { name, value } = e.target;
        setFormData((fromData) => ({ ...fromData, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fromData)
        history(`/steps/99/${id}/${slug}`);
    }


    
    return (
        <div className="ccform">
            <p>You selected</p>
            <h2 className="package-name">{serviceTitle}</h2>
            <Link to="/" className="change-pacage">Change</Link>

            <form onSubmit={handleSubmit} id="offersubmit">
                <div className="field-row">
                    <label htmlFor="companyname" className="form-label">What is your company called? *</label>
                    <input type="text" name="companyname" onChange={handleOnChange} className="form-control" id="companyname" placeholder="company name"/>
                </div>
                <div className="field-row">
                    <label htmlFor="industry" className="form-label">What industry do you operate in? *</label>
                    <input type="text" name="industry" onChange={handleOnChange} className="form-control" id="industry" placeholder="industry"/>
                </div>
                <input type="hidden" name="servicename" id='serviceName' value={serviceTitle} />
                <button className="select-offer-btn btn-submit" type="submit">Next</button>
            </form>
        </div>
    )
}

export default StepFour
