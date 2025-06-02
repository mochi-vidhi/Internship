import React,{createContext,useState} from 'react'


export const FormDataContext = createContext();
export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    personalInfo: {},
    addressInfo: {},
    additionalInfo: {}
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};