import React from 'react'
import './Logos.css'
import logo1 from './../../assets/images/brandLogo1_1.svg'
import logo2 from './../../assets/images/brandLogo1_2.svg'
import logo3 from './../../assets/images/brandLogo1_3.svg'
import logo4 from './../../assets/images/brandLogo1_4.svg'
import logo5 from './../../assets/images/brandLogo1_5.svg'
import logo6 from './../../assets/images/heroShape1_3.webp'
import star from './../../assets/images/asterisk.svg'

export default function Logos({ x }) {
    return (
        <>
            {x && <div className='ball'>
                <img src={logo6} alt="" />
            </div>}
            
            {x && <div className= {x? 'logos' : 'logos2'} >
                <img className='logo-img' src={logo1} alt="" />
                <img className='logo-img' src={logo2} alt="" />
                <img className='logo-img' src={logo3} alt="" />
                <img className='logo-img' src={logo4} alt="" />
                <img className='logo-img' src={logo5} alt="" />
            </div>}
            {!x &&<div className= {x? 'logos' : 'logos2'} >
                <div className='yes'>
                <img src={star} alt="" />
                <h3>Cyber Security</h3>
                </div>
                <div className='none'>
                <img src={star} alt="" />
                <h3>IT Soltion</h3>
                </div>
                <div className='none'>
                <img src={star} alt="" />
                <h3>Technology</h3>
                </div>
                <div className='none'>
                <img src={star} alt="" />
                <h3>Data Security</h3>
                </div>
            </div>}


        </>
    )
}
