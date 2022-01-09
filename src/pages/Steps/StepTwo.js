import React, { useContext, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FormDataContext } from '../../contexts/FormData/FormDataProvider';


const StepTwo = (props) => {
    const {ahandleOnChange} = useContext(FormDataContext);
    const history = useNavigate();

    const {id, tite, slug} = props.stepData;

    const serviceTitle = tite != '' ? tite : '';
    const [fromData, setFormData] = useState({})
    const handleOnChange = e => {
        const { name, value } = e.target;
        setFormData((fromData) => ({ ...fromData, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fromData)
        history(`/steps/3/${id}/${slug}`);
    }


    
    return (
        <div className="ccform">
            <p>You selected</p>
            <h2 className="package-name">{serviceTitle}</h2>
            <Link to="/" className="change-pacage">Change</Link>
            <form onSubmit={handleSubmit} id="offersubmit">
                <div className="field-row">
                    <label htmlFor="useremail" className="form-label">What is your email address? *</label>
                    <input type="text" name="useremail" onChange={handleOnChange} className="form-control" id="useremail" placeholder="name@domain.com"/>
                </div>
                <div className="field-row">
                    <label htmlFor="usermobile" className="form-label">What is your phone number? *</label>
                    <input type="text" name="usermobile" onChange={handleOnChange} className="form-control" id="usermobile" placeholder="0123 456 7890"/>
                </div>
                <input type="hidden" name="servicename" id='serviceName' value={serviceTitle} />
                <button className="select-offer-btn btn-submit" type="submit">Next</button>
            </form>
        </div>
    )
}

export default StepTwo
