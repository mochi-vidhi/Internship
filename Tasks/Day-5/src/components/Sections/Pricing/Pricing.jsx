import React from 'react'
import { FcManager } from "react-icons/fc";
import { FaRupeeSign } from "react-icons/fa";
import './pricing.css'

export default function Pricing({ mode, id }) {
    return (
        <div id={id} className={`pricing ${mode}`}>
            <h2>Affordable Tailoring</h2>
            <div>
            <div className='price-card'>
                <h3>Men's Shirt Stitching (પુરુષોની શર્ટની સિલાઈ) </h3>
                <h4>Price : 300  <FaRupeeSign />  </h4>
                <img src="/cardLogo.png" alt="card Logo" />
                
            </div>
            <div className="price-card">
                <h3>Men's Pent Stitching <br/> (પુરુષોની પેન્ટની સિલાઈ)</h3>
                <h4>Price: 350 <FaRupeeSign /></h4>
                <img src="/cardLogo.png" alt="Card Logo" />
                
            </div>
            <div className="price-card">
                <h3>Pathani Stitching <br/> (પઠાણીની સિલાઈ)</h3>
                <h4>Price: 600 <FaRupeeSign /></h4>
                <img src="/cardLogo.png" alt="Card Logo" />
                
            </div>
            <div className="price-card">
                <h3>Men's Kurta Stitching <br/> (કુરતો સિલાઈ)</h3>
                <h4>Price: 250 <FaRupeeSign /></h4>
                <img src="/cardLogo.png" alt="Card Logo" />
            </div>
            <div className="price-card">
                <h3>Men's pair of shirt-pent Stitching <br/> (શર્ટ અને પેન્ટની જોડી સિલાઈ) </h3>
                <h4>Price: 650 <FaRupeeSign /></h4>
                <img src="/cardLogo.png" alt="Card Logo" />
            </div>
            <div className="price-card">
                <h3>School Uniform <br/>(સ્કૂલ યુનિફોર્મ)</h3>
                <h4>Price: 500 <FaRupeeSign /></h4>
                <img src="/cardLogo.png" alt="Card Logo" />
            </div>
            <div className="price-card">
                <h3>Repairing <br/> (કપડાંનું રીપેરીંગ)</h3>
                <h4>Price: 50 <FaRupeeSign /> - 100 <FaRupeeSign /> </h4>
                <img src="/cardLogo.png" alt="Card Logo" />
            </div>
            <div className="price-card">
                <h3>Ladies' Stitching <br/>(ડ્રેસની સિલાઈ) </h3>
                <h4>Price: 200 <FaRupeeSign /> </h4>
                <img src="/cardLogo.png" alt="Card Logo" />
            </div>


      </div>
           <div className='offer-box'>
               <p>Ready in 3 to 4 days</p>
               <p><strong>Urgent delivery available</strong></p>
               <h4>Festival Offer <span>10% OFF on all</span> stitching!</h4>
               <p>Family Pack <span>Discount</span> on bulk orders</p>
           </div>
        </div>
    )
}
