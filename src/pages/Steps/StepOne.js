import React, { useContext, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FormDataContext } from '../../contexts/FormData/FormDataProvider';


const StepOne = (props) => {
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
        history(`/steps/2/${id}/${slug}`);
    }


    
    return (
        <div className="ccform">
            <p>You selected</p>
            <h2 className="package-name">{serviceTitle}</h2>
            <Link to="/" className="change-pacage">Change</Link>
            <p>So we can get started, please enter some contact details below</p>
            <form onSubmit={handleSubmit} id="offersubmit">
                <div className="field-row">
                    <label htmlFor="username" className="form-label">What is your name? *</label>
                    <input type="text" name="ausername" onChange={handleOnChange} className="form-control" id="username" placeholder="Full name"/>
                </div>
                <div className="field-row">
                    <label htmlFor="eusername" className="form-label">What is your name? *</label>
                    <input type="text" name="eusername" onChange={handleOnChange} className="form-control" id="eusername" placeholder="Full name"/>
                </div>
                <input type="hidden" name="servicename" id='serviceName' value={serviceTitle} />
                <button className="select-offer-btn btn-submit" type="submit">Next</button>
            </form>
        </div>
    )
}

export default StepOne
