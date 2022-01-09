import React, { createContext } from 'react';
import UseFormdata from '../../hooks/UseFormdata';

export const FormDataContext = createContext(null);

const FormDataProvider = ({ children }) => {
    const allContexts = UseFormdata();
    return (
        <FormDataContext.Provider value={allContexts}>
            {children}
        </FormDataContext.Provider>
    );
};

export default FormDataProvider;