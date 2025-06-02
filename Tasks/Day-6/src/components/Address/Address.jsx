import React, { useContext, useEffect, useState } from 'react'
import '../KycInfo/KycInfo.css'
import { useNavigate } from 'react-router-dom';
import { FormDataContext } from '../FormDataProvider';

export default function Address() {
    const [input, setInput] = useState({
        country: '',
        city: '',
        state: '',
        address: '',
        mNumber: '',
        email: ''
    })
    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);
    const navigate = useNavigate();
    const { formData, setFormData } = useContext(FormDataContext);
    useEffect(() => {
        fetch('https://countriesnow.space/api/v0.1/countries/positions')
            .then(res => res.json())
            .then(data => {
                const countryList = data.data.map(c => c.name);
                setCountry(countryList.sort());
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        if (input.country) {
            fetch('https://countriesnow.space/api/v0.1/countries/states', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ country: input.country })
            })
                .then(res => res.json())
                .then(data => {
                    const stateList = data.data.states.map(s => s.name);
                    setState(stateList.sort());
                })
                .catch(err => console.error(err));
        }
    }, [input.country]);
    
    useEffect(() => {
            if (formData.addressInfo) {
                setInput({
                    country: formData.addressInfo.country||'',
                    city: formData.addressInfo.city||'',
                    state: formData.addressInfo.state||'',
                    address: formData.addressInfo.address||'',
                    mNumber: formData.addressInfo.mNumber||'',
                    email:formData.addressInfo.email||''
                })
            }
        }, [formData])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({ ...prev, [name]: value }))
    }
    const handleNext = (e) => {
        e.preventDefault();
        console.log(input);
        setFormData((prev) => ({
            ...prev,
            addressInfo: input
        }));
        navigate('/accountType');
    }
    return (
        <div className='kyc-container'>
            <h2>Address & Contact Info</h2>
            <form className='kyc-form' onSubmit={handleNext}>
                <label>Country</label>
                <select name="country" value={input.country} onChange={handleChange}>
                    {country.map((c, i) => (
                        <option value={c} key={i}>
                            {c}
                        </option>
                    ))}
                </select>
                <label>State</label>
                <select name="state" value={input.state} onChange={handleChange}>
                    {state.map((s, i) => (
                        <option value={s} key={i}>
                            {s}
                        </option>
                    ))}
                </select>
                <label>City </label>
                <input type="text" name="city" value={input.city} onChange={handleChange} required />
                <label>Address</label>
                <textarea type="text" name="address" value={input.address} onChange={handleChange} required />
                <label>Mobile Number</label>
                <input type="number" name="mNumber" placeholder='10 digit number' value={input.mNumber} onChange={handleChange} required />
                <label>Email Address</label>
                <input type="email" name="email" value={input.email} onChange={handleChange} required />
                <div className='btn-container'>
                    <button onClick={() => setInput({
                        country: '',
                        city: '',
                        state: '',
                        address: '',
                        mNumber: '',
                        email: ''
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
