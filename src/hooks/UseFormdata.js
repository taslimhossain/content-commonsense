import { useState, useEffect } from 'react';

const UseFormdata = () => {

    const [afromData, setafromData] = useState({});
    const [fromData, setFormData] = useState({})

    const handleOnChange = e => {
        const { name, value } = e.target;
        setFormData((fromData) => ({ ...fromData, [name]: value }));
        ahandleOnChange(fromData)
    }
    console.log(fromData);

    //set field value
    const ahandleOnChange = (newfromData) => {
        console.log('afef',newfromData)
 
       // setafromData((afromData) => ( { ...afromData, newfromData }));
        console.log({...afromData});

        // const wowdata = {...taslim};
        // wowdata['eafe'] = 'e';
        
        
        // const field = e.target.name;
        // const value = e.target.value;
        // wowdata[field] = 'e';
        // console.log(field);

        // settaslim(wowdata);
        // console.log(taslim)
        // const newFormData = { ...fromData }
        // newFormData[field] = value;
        // setFormData(newFormData);
        // console.log(newFormData);
        // console.log('handleOnChange');  
    }


    const abc = 'wow';
    return {
        abc,
        ahandleOnChange
    };
}
export default UseFormdata;