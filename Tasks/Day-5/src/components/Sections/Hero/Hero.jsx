import React from 'react'
import './hero.css'

export default function Hero({mode,id}) {
    return (
        <section className={`hero-section ${mode}`} id={id}>
            <div className='hero-content'>
                <h1>Custom Tailoring Crafted with Perfection</h1>
                <p>We specialize in traditional and modern tailoring services for men and women. From everyday wear to special occasion outfits, every stitch is made with precision and love.</p>
                <h3>અમે ટાંકા નથી મારતા, વિશ્વાસ ટાંકી રાખીએ છીએ!</h3>
                <button className='hero-btn' onClick={()=> document.getElementById("service").scrollIntoView({ behavior: "smooth" })}>Check Our Service</button>
            </div>
            <div className='hero-image'>
                <img src="/papa.jpg" alt="tailor at work" />
            </div>
        </section>
    )
}
