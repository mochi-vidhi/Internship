import React from 'react'
import './gallery.css'

export default function Gallery({mode,id}) {
  return (
    <div id={id} className={`gallery ${mode}`}>
        <h2>Our Products</h2>
        <div>
            <div>
                <img src="https://rukminim3.flixcart.com/image/850/1000/xif0q/shirt/v/g/k/xl-men-regular-fit-solid-casual-shirt-uv-fashion-original-imagqz2yvhgxywqk.jpeg?q=90&crop=false" alt="shirt"/>
            </div>
            <div>
                <img src="https://mrbutton.in/cdn/shop/files/MACTR01_2.jpg?v=1748421726" alt="pent"/>
            </div>
            <div>
                <img src="https://assets.ajio.com/medias/sys_master/root/20240730/6FSl/66a8eafa1d763220fa4d2a08/-473Wx593H-700245390-blue-MODEL.jpg" alt="kurta"/>
            </div>
            <div>
                <img src="https://www.ethnicplus.in/media/wysiwyg/south-cotton-casual-maroon-kurti-in-lace-border-fj11975.jpg" alt="dress"/>
            </div>
            <div>
                <img src="https://www.rathore.com/cdn/shop/files/231104-10-078copy_200x.jpg?v=1741155172" alt="safari"/>
            </div>
            <div>
                <img src="https://i.etsystatic.com/39698029/r/il/bcfc8a/5712981700/il_570xN.5712981700_tt6q.jpg" alt="pathani"/>
            </div>
        </div>
    </div>
  )
}
