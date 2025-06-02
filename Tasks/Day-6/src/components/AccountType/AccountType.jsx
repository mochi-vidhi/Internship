import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../KycInfo/KycInfo.css'

import { FormDataContext } from '../FormDataProvider';

export default function AccountType() {
    const [input, setInput] = useState({
        pBranch: '',
        name: '',
        accType: ''
    })
    const navigate = useNavigate();
    const { formData, setFormData } = useContext(FormDataContext)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({ ...prev, [name]: value }));
    }
    useEffect(()=>{
        if(formData.additionalInfo){
            setInput({
                pBranch:formData.additionalInfo.pBranch||'',
                name:formData.additionalInfo.name||'',
                accType:formData.additionalInfo.accType||''
            })

        }
    },[formData])
    const handleNext = (e) => {
        e.preventDefault();
        setFormData((prev) => (
            {
                ...prev,
                additionalInfo: input
            }
        ))
        navigate('/display')
    }
    return (
        <div className='kyc-container'>
            <h2>Account Type & Options</h2>
            <form onSubmit={handleNext} className='kyc-form'>

                <label>Preferred Branch</label>
                <input type="text" name="pBranch" value={input.pBranch} onChange={handleChange} required />

                <label>Nominee Name </label>
                <input type="text" name="name" value={input.name} onChange={handleChange} required />

                <label>Account type</label>
                <select name="accType" onChange={handleChange} value={input.accType} required>
                    <option value="">Select Type</option>
                    <option value="Savings Account">Saving Account</option>
                    <option value="Current Account">Current Account</option>
                    <option value="Salary Account">Salary Account</option>
                </select>

                <div className='btn-container'>
                    <button onClick={() => setInput({
                        pBranch: '',
                        name: '',
                        accType: ''
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
// Purpose: Let users choose the account type and preferences.

// Fields:

// Account Type:

// Savings Account

// Current Account

// Salary Account

// NRI Account (if applicable)

// Preferred Branch (Dropdown or Searchable)

// Nominee Details:

// Nominee Name

// Relationship

// Internet Banking:

// Enable Internet Banking? (Yes/No)

// Debit Card:

// Select Card Type (Regular, Platinum, Virtual)