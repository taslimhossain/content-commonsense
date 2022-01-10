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
