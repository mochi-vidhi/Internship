import React from 'react'
import './footer.css'
export default function Footer({mode}) {
    return (
        <footer className={`contact-info ${mode}`}>
            <h3><strong>કિશોર ટેઈલર</strong> - આપનું સ્વાગત છે</h3>
            <p><strong> ફોન:</strong> +91 9898993701</p>
            <p><strong> સરનામું:</strong> ઝંડા બજાર, મોચીવાડ,પેટલાદ – ૩૮૮૪૫૦, ગુજરાત</p>
            <p><strong> સમય:</strong> સવારે 9:00 થી સાંજે 11:00 </p>
        </footer>
    )
}
