import './Footer.css'
import logo from './../../assets/images/logo2.svg'
import footerimg1 from './../../assets/images/footerThumb1_1.webp'
import footerimg2 from './../../assets/images/footerThumb1_2.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faAnglesRight, faArrowRight, faCalendarDays, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
export default function Footer({margin}) {
    return (
        <>
            <div className={margin ? 'FOOTER1 ' : 'FOOTER2'}>
                <div className='container footerDad'>
                    <div className='footer1'>
                        <img src={logo} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla inventore architecto id. Commodi, vel esse?</p>
                        <div className='footer-icons'>
                            <div className='icons-border'>
                            <FontAwesomeIcon icon={faFacebook} />
                            </div>
                            <div className='icons-border'>
                            <FontAwesomeIcon icon={faTwitter} />
                            </div>
                            <div className='icons-border'>
                            <FontAwesomeIcon icon={faYoutube} />
                            </div>
                            <div className='icons-border'>
                            <FontAwesomeIcon icon={faInstagram} />
                            </div>
                        </div>
                    </div>
                    <div className='footer2'>
                        <h2>Quick Links</h2>
                        <ul>
                            <li><FontAwesomeIcon icon={faAnglesRight} /> Extech About </li>
                            <li><FontAwesomeIcon icon={faAnglesRight} /> Our Services </li>
                            <li><FontAwesomeIcon icon={faAnglesRight} /> Our Blogs </li>
                            <li><FontAwesomeIcon icon={faAnglesRight} /> FAQ'S</li>
                            <li><FontAwesomeIcon icon={faAnglesRight} /> Contact Us</li>
                        </ul>
                    </div>
                    <div className='footer3'>
                        <h2>Recent Posts</h2>
                        <div className='footer3Div'>
                            <img src={footerimg1} alt="" />
                            <div>
                                <h5><FontAwesomeIcon icon={faCalendarDays} /> 15th April, 2024</h5>
                                <h3>Technology Trend in 2024</h3>
                            </div>
                        </div>
                        <div className='footer3Div'>
                            <img src={footerimg2} alt="" />
                            <div>
                                <h5><FontAwesomeIcon icon={faCalendarDays} /> 20th June, 2024</h5>
                                <h3>The Surfing Man Will Blow Your Mind</h3>
                            </div>
                        </div>
                    </div>
                    <div className='footer4'>
                        <h2>Contact Us</h2>
                        <ul>
                            <li><FontAwesomeIcon icon={faEnvelope} /> info@example.com </li>
                            <li><FontAwesomeIcon icon={faPhone} /> +208-6666-0112 </li>
                            <li><input className='email' type='email' placeholder='Your email address' />
                                <button><FontAwesomeIcon icon={faArrowRight} /></button> </li>
                            <li><input className='checkbox' type='checkbox' />I agree to the Privacy Policy </li>
                        </ul>
                    </div>
                </div>
                <div className='down'>
                    <span>@ All Copyright 2024 by Extech</span>
                    <span>
                        <span>Terms& Condition </span>
                        <span>Privacy Policy</span>
                    </span>
                </div>
            </div>
        </>
    )
}
