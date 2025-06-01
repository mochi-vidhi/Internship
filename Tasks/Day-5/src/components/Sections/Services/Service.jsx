import React from 'react'
import './service.css'

export default function Service({ mode, id }) {
    return (
        <div id={id} className={`service ${mode}`}>
            <h2>Our Services</h2>
            <p>Tailoring is the art of crafting clothing that fits perfectly to an individual's body and style. It involves precision, skill, and attention to detail to transform fabrics into well-fitted garments. Whether it's everyday wear, traditional outfits, or special occasion attire, tailoring ensures each piece is made with care, comfort, and elegance in mind.</p>
            <div>
                <div>
                    <img src="https://alterdry.com/wp-content/uploads/2023/11/1.png" alt="men's tailor" />
                    <h3>Men<sup>'</sup>s Stitching & Repairing</h3>
                    <h4>પુરુષોના કપડાંનું સેવણ અને રિપેરિંગ</h4>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/1857608723/photo/creative-man-upcycling-clothes.jpg?s=612x612&w=0&k=20&c=mZvO36Obz6ScD5x9VF0KA85aMqoRfO0xUStUh613kaA=" alt="Ladis stitching & reparing" />
                    <h3>Ladies<sup>'</sup> Stitching & Repairing</h3>
                    <h4>મહિલાઓના કપડાંનું સેવણ અને રિપેરિંગ</h4>
                </div>
                <div>
                    <img src="https://5.imimg.com/data5/SELLER/Default/2022/4/YK/PD/XV/8594554/school-uniform-tailoring-service-500x500.jpg" alt="school uniform" />
                    <h3>School Uniform Stitching</h3>
                    <h4>સ્કૂલ યુનિફોર્મનું સેવણ</h4>
                </div>
                <div>
                    <img src="https://i0.wp.com/myersparktailors.com/wp-content/uploads/2024/03/fort-mill-custom-suit-tailor-1024x683.jpg" alt="festival stitching" />
                    <h3>Festival-wise Clothes Stitching</h3>
                    <h4>તહેવાર પ્રમાણેના કપડાંનું સેવણ</h4>
                </div>
                <div>
                    <img src="https://www.tradeuno.com/cdn/shop/collections/Cotton_Satin_28.jpg?v=1695968602&width=1200" alt="urgent stitching" />
                    <h3>Cloth/Fabric Selling</h3>
                    <h4>કાપડ/કપડાં વેચાણ</h4>
                </div>
                <div>
                    <img src="https://etimg.etb2bimg.com/photo/77267476.cms" alt="readymad" />
                    <h3>Readymade Garments for Children</h3>
                    <h4>બાળકો માટે તૈયાર કપડાં</h4>
                </div>
                <div>
                    <img src="https://cdn.jwplayer.com/v2/media/Kf8VqSqU/thumbnails/KZ4cFsTN.jpg?width=1280" alt="iron" />
                    <h3>Ironing Service</h3>
                    <h4>કપડાં પ્રેસ કરવાની સેવા</h4>
                </div>
            </div>
        </div>
    )
}
