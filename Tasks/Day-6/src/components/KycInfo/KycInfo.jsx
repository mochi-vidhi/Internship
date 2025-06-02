import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './KycInfo.css'

import { FormDataContext } from '../FormDataProvider';

export default function KycInfo() {
    const [input, setInput] = useState({
        name: '',
        bDate: '',
        gender: '',
        aNumber: '',
        file: null
    });
    const { formData, setFormData } = useContext(FormDataContext)
    const navigate = useNavigate();
    useEffect(() => {
    if (formData.personalInfo) {
      setInput({
        name: formData.personalInfo.name || '',
        bDate: formData.personalInfo.bDate || '',
        gender: formData.personalInfo.gender || '',
        aNumber: formData.personalInfo.aNumber || '',
        file: formData.personalInfo.file || null
      });
    }
  }, [formData]);
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const handleNext = (e) => {
        e.preventDefault();
        console.log(input);
        setFormData((prev) => ({
            ...prev,
            personalInfo: input
        }))
        navigate('/address')
    }
    return (
        <div className='kyc-container'>
            <h2>Kyc Info</h2>
            <form onSubmit={handleNext} className='kyc-form'>
                <label>Full Name</label>
                <input type="text" name="name" value={input.name} onChange={handleChange} required />

                <label>Date of Birth</label>
                <input type="date" name="bDate" value={input.bDate} onChange={handleChange} required />

                <label>Gender</label>
                <select name="gender" onChange={handleChange} value={input.gender} required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <label>Aadhaar Number - Indian user </label>
                <input type="number" name="aNumber" value={input.aNumber} onChange={handleChange} required />

                <label>Upload passport size photo</label>
                <input type='file' name="file" onChange={handleChange} accept='image/*' required />

                <div className='btn-container'>
                    <button onClick={() => setInput({
                        name: '',
                        bDate: '',
                        gender: '',
                        aNumber: '',
                        file: null
                    })}
                        className='clear-button'>
                        Clear
                    </button>
                    <button type="submit" className="next-button">Next</button>

                </div>

            </form>
        </div>
    )
}

// Full Name (as per ID)

// Date of Birth (with a date picker)

// Gender (Male / Female / Other)

// PAN Number (Permanent Account Number – for Indian users)

// Aadhaar Number (optional, India specific)

// Upload Photo (Passport size)

// Upload PAN Card (PDF/JPEG)