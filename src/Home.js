import React from 'react'
import Product from './Product'
import './Home.css'
import Picture from './pic.jpg';


function Home() {
    return (
        <div className="home">
            <img className="home__image" src={Picture} alt=""/>
            <div className="home__row">
                <Product
                    id="1"
                    title="Gaming Pc"
                    price="16 448,45"
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81YUHsnzj1L._AC_AA180_.jpg">
        
                </Product>

                <Product
                    id="2"
                    title="Acer Nitro 5 Gaming Laptop"
                    price="13981,18"
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71s1LRpaprL._AC_UY327_FMwebp_QL65_.jpg">
        
                </Product>

            </div>
            <div className="home__row">
                <Product
                    id="3"
                    title="Sceptre 30-inch Curved Gaming Monitor"
                    price="4589,12"
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81Wt3h7-V2L._AC_UY327_FMwebp_QL65_.jpg">
        
                </Product>

                <Product
                    id="4"
                    title="TEAMGROUP T-Force Delta RGB 32GB RAM"
                    price="2138,13"
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61QQMg72PAL._AC_UY327_QL65_.jpg">
        
                </Product>

                <Product
                    id="5"
                    title="Gaming Headset for PS4, PC, Xbox One "
                    price="639,68"
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61NZPCYSeVL._AC_UY327_QL65_.jpg">
        
                </Product>
                
            </div>
            <div className="home__row">
                <Product
                    id="6"
                    title="
                    Desktop Processor."
                    price={12345}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51wpN1SESrL._AC_US240_FMwebp_QL65_.jpg">
        
                </Product>
                <Product
                    id="7"
                    title="The Last Of Us II"
                    price="982,74"
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51QuOXSYxlL._AC_US327_FMwebp_QL65_.jpg">
        
                </Product>
                <Product
                    id="8"
                    title="PlayStation 4 Slim 1TB Console"
                    price="4500"
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71PGvPXpk5L._AC_UY327_FMwebp_QL65_.jpg">
                </Product>
            </div>
            <div className="home__row">
                <Product
                    id="8"
                    title="Samsung 32 inch CF391 Curved Monitor (LC32F391FWNXZA) - 1080p, Dual Monitor, Laptop Monitor, Monitor Stand/Riser/Mount Compliant, AMD Freesync, Gaming, HDMI, White"
                    price="7500"
                    rating={5}
                    image="https://m.media-amazon.com/images/I/816PL-g7boL._AC_UY327_FMwebp_QL65_.jpg">
                </Product>
            </div>
        </div>

    )
}

export default Home
