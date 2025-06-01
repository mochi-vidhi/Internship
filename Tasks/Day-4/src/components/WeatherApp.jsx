import React, { useState } from 'react';
import './weather.css';
import Lottie from 'lottie-react';
import clearDay from '../lotties/clear-day.json';
import cloudy from '../lotties/cloudy.json';
import rain from '../lotties/rain.json';
import thunder from '../lotties/thunder.json';

export default function WeatherApp() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const API_KEY = 'Your Api key';

    const handleWeather = async () => {
        if (!city) return;
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
            );
            const data = await res.json();
            if (data.cod !== 200) {
                alert('City not found');
                setWeather(null);
                return;
            }
            setWeather(data);
        } catch (err) {
            alert('Error in fetching data');
        }
    };

    const getLocationWeather = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            try {
                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
                );
                const data = await res.json();
                if (data.cod !== 200) {
                    alert('Location not found');
                    setWeather(null);
                    return;
                }
                setWeather(data);
                setCity(data.name); 
            } catch (err) {
                alert('Error fetching location weather');
            }
        });
    };

    const handleKeyChange = (e) => {
        if (e.key === "Enter") handleWeather();
    };

    const getLottieForCondition = (condition) => {
        switch (condition?.toLowerCase()) {
            case 'clear':
                return clearDay;
            case 'clouds':
                return cloudy;
            case 'rain':
                return rain;
            case 'thunderstorm':
                return thunder;
            default:
                return clearDay;
        }
    };

    const weatherClass = weather?.weather[0]?.main?.toLowerCase() || 'default';

    return (
        <div className={`app ${weatherClass}`}>
            <h1>🌤 Weather App</h1>
            <div className="input-group-vertical">
                <input
                    type="text"
                    name="city"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={handleKeyChange}
                />
                <button onClick={handleWeather}> Search</button>
                <button onClick={getLocationWeather}> Use My Location</button>
            </div>

            {weather && (
                <div className="weather-box fadeIn">
                    <Lottie
                        animationData={getLottieForCondition(weather.weather[0].main)}
                        style={{ height: 200 }}
                    />
                    <h3>{weather.name}, {weather.sys.country}</h3>
                    <p>Temp: {weather.main.temp}°C</p>
                    <p>Wind: {weather.wind.speed} m/s</p>
                    <p>Pressure: {weather.main.pressure}</p>
                    <p>Humidity: {weather.main.humidity}</p>
                    <p>Condition: {weather.weather[0].main}</p>
                </div>
            )}
        </div>
    );
}
