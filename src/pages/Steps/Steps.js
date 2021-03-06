import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getDataStorage, getServices, SendEmail, setDataStorage } from '../../action';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree ';
import StepFour from './StepFour';
import StepFinal from './StepFinal';
import StepFive from './StepFive';
import StepSix from './StepSix';
import StepSeven from './StepSeven';
import StepEight from './StepEight ';
import StepNine from './StepNine';
import StepTen from './StepTen';
import StepEleven from './StepEleven';
import Preeloader from '../../Preeloader';

const Steps = () => {

    const [userData, setUserData] = useState([])
    const [sendLoading, setsendLoading] = useState('')
    const {step, serviceid, serviceslug} = useParams();
    const history = useNavigate();
 
    const stepNumber = parseInt(step);
    const serviceTitle = getServices[serviceid] !== '' ? getServices[serviceid] : '';
    
    const userFormData = (data) => {
        const newData = { ...userData, ...data };
        setUserData(newData)
        const dbdata = getDataStorage();
        const newDbData = {...dbdata,...newData}
        setDataStorage(newDbData)
    }

   const handleEmailSubmit = (e) => {
      e.preventDefault();

      if( parseInt(serviceid) === 3 && parseInt(step) !== 11 ) {
         history(`/steps/5/${serviceid}/${serviceslug}`);
     } else {
         setsendLoading('Sending...')
         const dbdata = SendEmail();
         dbdata.then(function (response) {
            if( response.data.send ) {
               setsendLoading('')
               setDataStorage({})
               history(`/steps/99/${serviceid}/${serviceslug}`);
            }
         })
         dbdata.catch(function (error) {
            console.log(error);
         });
      }

  }

    const serviceData = {
        serviceid,
        serviceTitle,
        serviceslug,
        sendLoading,
        userFormData,
        handleEmailSubmit
    }

    const FormData = () => {
        switch (stepNumber) {
            case 1:
               return <StepOne stepData={serviceData} userState={userFormData} />
            case 2:
               return <StepTwo stepData={serviceData} userState={userFormData} />
            case 3:
               return <StepThree stepData={serviceData} userState={userFormData} />
            case 4:
               return <StepFour stepData={serviceData} userState={userFormData} />
            case 5:
               return <StepFive stepData={serviceData} userState={userFormData} />
            case 6:
               return <StepSix stepData={serviceData} userState={userFormData} />
            case 7:
               return <StepSeven stepData={serviceData} userState={userFormData} />
            case 8:
               return <StepEight stepData={serviceData} userState={userFormData} />
            case 9:
               return <StepNine stepData={serviceData} userState={userFormData} />
            case 10:
               return <StepTen stepData={serviceData} userState={userFormData} />
            case 11:
               return <StepEleven stepData={serviceData} userState={userFormData} />
            case 99:
               return <StepFinal stepData={serviceData} />
            default:
                return <StepOne />
        }
    }

    return (
       <>
       {/* <Preeloader /> */}
        <main>
            <div className="form-bg"></div>
            <FormData />
            
        </main>
        </>
    )
}

export default Steps
