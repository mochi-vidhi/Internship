import React from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'

export default function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/weatherApp');
    }
    return (
        <div className='home-container'>
            <div className='home-card'>
                <h1>My Weather App</h1>
                <p>Get real-time weather updates for your city or current location.</p>
                <button onClick={handleClick}>Get started</button>
            </div>
        </div>
    )
}
