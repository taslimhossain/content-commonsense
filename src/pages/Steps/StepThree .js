import React, { useContext, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FormDataContext } from '../../contexts/FormData/FormDataProvider';


const StepThree  = (props) => {
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
        history(`/steps/4/${id}/${slug}`);
    }

    return (
        <div className="ccform">
            <p>You selected</p>
            <h2 className="package-name">{serviceTitle}</h2>
            <Link to="/" className="change-pacage">Change</Link>
            <p>Just a few details about your website and company and you are done!</p>
            <form onSubmit={handleSubmit} id="offersubmit">
                <div className="field-row">
                    <label htmlFor="userwebiste" className="form-label">What is your website URL? *</label>
                    <input type="text" name="userwebiste" onChange={handleOnChange} className="form-control" id="userwebiste" placeholder="www.domain.com"/>
                </div>
                <input type="hidden" name="servicename" id='serviceName' value={serviceTitle} />
                <button className="select-offer-btn btn-submit" type="submit">Next</button>
            </form>
        </div>
    )
}

export default StepThree 
