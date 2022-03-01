import axios from "axios";

export const getServices = {
    1 : '2 Months Free Account Management',
    2 : 'Completely Free Custom Built & Optimised Website',
    3 : 'Only Pay For Leads You Receive (No Management Fee)',
};

export const setDataStorage = (data) => {
    localStorage.setItem('content-commonsense', JSON.stringify(data) );
}

export const getDataStorage = () => {
    const formData = localStorage.getItem('content-commonsense');
    return JSON.parse(formData);
}

export const getFormValue = (key) => {
    const formData = localStorage.getItem('content-commonsense');
    const formStorage = JSON.parse(formData);
    if( formStorage !== null && formStorage[key] !== undefined && formStorage[key] !== '' ){
        return formStorage[key];
    }
    return '';
}



export const sendEmail = () => {

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };


    const dbdata = getDataStorage();
    console.log('email sending', dbdata)
    // const allData = JSON.parse(dbdata);
    // console.log(allData)
    const formData = {...dbdata, 'sendemail':'yes'}
    axios.post('https://minisite.taslimhossain.com/mailapi', {...formData, axiosConfig
   // axios.post('http://localhost:3000/', {...dbdata
        // formData: dbdata,
        // firstName: 'Fred',
        // lastName: 'Flintstone'
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });


    return 1;
}
