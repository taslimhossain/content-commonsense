import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getServices } from '../../action';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree ';
import StepFour from './StepFour';
import StepFinal from './StepFinal';

const Steps = () => {
    const context = useContext('FormDataContext');
    const [fromData, setFormData] = useState({})
    const {step, serviceid, serviceslug} = useParams();

    const stepNumber = parseInt(step);
    const history = useNavigate();
    const serviceTitle = getServices[serviceid] != '' ? getServices[serviceid] : '';
    

    const serviceData = {
        'id' : serviceid,
        'tite' : serviceTitle,
        'slug' : serviceslug
    }

    const FormData = () => {

        switch (stepNumber) {
            case 1:
               return <StepOne stepData={serviceData} />
                break;

            case 2:
               return <StepTwo stepData={serviceData} />
                break;

            case 3:
               return <StepThree stepData={serviceData} />
                break;

            case 4:
               return <StepFour stepData={serviceData} />
                break;

            case 99:
               return <StepFinal stepData={serviceData} />
                break;
        
            default:
                return <StepOne />
                break;
        }

    }

    return (
        <main>
            <div className="form-bg"></div>
            <FormData />
            
        </main>
    )
}

export default Steps
