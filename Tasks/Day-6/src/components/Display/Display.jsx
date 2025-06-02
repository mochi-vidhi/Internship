import React, { useContext, useState } from 'react'
import { FormDataContext } from '../FormDataProvider'
import { useNavigate } from 'react-router-dom';
import './display.css'

export default function Display() {
    const { formData } = useContext(FormDataContext);
    const navigate = useNavigate();
    const [submit, setSubmit] = useState(false);
    const handleSubmit = () => {
        console.log(formData);
        const json = JSON.stringify(formData,null,2);
        const blob = new Blob([json],{type:'application/json'});
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'kycData.json'
        link.click();
        setSubmit(true);
    }
    return (
        <div className='display-container'>
            <h2 className="review-heading">Final Review</h2>
            <div className='info-box'>
                <h3 >Name: {formData.personalInfo.name}</h3>
                <h3>City: {formData.addressInfo.city}</h3>
                <h3>Account Type: {formData.additionalInfo.accType}</h3>
            </div>
            <div className='btn-group'>

                <button onClick={() => navigate('/')}>Edit Personal Info</button>
                <button onClick={() => navigate('/address')}>Edit Address Info</button>
                <button onClick={() => navigate('/accountType')}>Edit Account Type Info</button>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            {submit && (<p className="success-msg">Form Submitted Successfully!!</p>)}
        </div>
    )
}
