import React, { useContext, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FormDataContext } from '../../contexts/FormData/FormDataProvider';


const StepFinal = (props) => {
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
            <h2 className="package-name">Congratulations!</h2>
            <p>You have successfully claimed your offer and a member of our on-boarding team will be in touch with you shortly to get you on the way to generating more leads through your website!</p>
            
            <h5>If you have any friends or partners that may benefit from one of our offers...</h5>
            <button className="select-offer-btn btn-submit" type="submit">Share</button>
        </div>
    )
}

export default StepFinal
