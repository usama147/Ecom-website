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
                    title="iBUYPOWER Gaming PC Computer Desktop Element 9260 (Intel Core i7-9700F 3.0Ghz, NVIDIA GeForce GTX 1660 Ti 6GB, 16GB DDR4, 240GB SSD, 1TB HDD, WiFi & Windows 10 Home) Black"
                    price="16 448,45"
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81YUHsnzj1L._AC_AA180_.jpg">
        
                </Product>

                <Product
                    id="2"
                    title="Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H, NVIDIA GeForce GTX 1650, 15.6 Full HD IPS Display, 8GB DDR4, 256GB NVMe SSD, WiFi 6, Waves MaxxAudio, Backlit Keyboard, AN515-54-5812"
                    price="13981,18"
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71s1LRpaprL._AC_UY327_FMwebp_QL65_.jpg">
        
                </Product>

            </div>
            <div className="home__row">
                <Product
                    id="3"
                    title="Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN)"
                    price="4589,12"
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81Wt3h7-V2L._AC_UY327_FMwebp_QL65_.jpg">
        
                </Product>

                <Product
                    id="4"
                    title="TEAMGROUP T-Force Delta RGB 32GB (2x16GB) 3200MHz (PC4-25600) CL 16 Desktop Gaming PC Memory Module Ram Upgrade 288-Pin DDR4 SDRAM TF4D432G3200HC16CDC01 - White"
                    price="2138,13
                    (Price May vary from selected color.)"
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61QQMg72PAL._AC_UY327_QL65_.jpg">
        
                </Product>

                <Product
                    id="5"
                    title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo PS3 Games"
                    price="639,68"
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61NZPCYSeVL._AC_UY327_QL65_.jpg">
        
                </Product>
                
            </div>
            <div className="home__row">
                <Product
                    id="6"
                    title="
                    AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler."
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
