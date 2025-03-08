import React from "react";

import "./Footer.css"
import Log_1 from "../Header/Log/Log_1";

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_0'>
                <Log_1/>
            </div>
            <div className='footer_1'>
                <p>г.Москва Цветной б-р, 40</p>
                <p>+7 495 771 21 11</p>
                <p>info@skan.ru</p>
            </div>
        </footer>
    )
}


export default Footer;