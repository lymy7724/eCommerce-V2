import React from 'react'
import './Footer.css'
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import tiktok from '../../images/tiktok.svg'

export default function Footer() {
  return (
    <footer>
        <div className="footContainer">
            <div className='socials'>
                <a href="https://www.instagram.com/"><img src={instagram} alt='instagram logo' className='iconsLog'/></a>
                <a href="https://www.facebook.com/"><img src={facebook} alt='facebook logo' className='iconsLog'/></a>
                <a href="https://www.tiktok.com/en/"><img src={tiktok} alt='tiktok logo' className='iconsLog'/></a>
            </div>
            <div>
                <ul className="ftlink">
                    <li>Track Your Order</li>
                    <li>Terms and Condition</li>
                    <li>Shipping</li>
                </ul>
            </div>
            <div>
                <p style={{fontFamily: "sans-serif"}}>Copyright &copy; 2024 Crochetopia </p>
            </div>
        </div>
    
    </footer>
  )
}
