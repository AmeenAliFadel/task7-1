import './ContactForm.css'
import video from './../../assets/images/video.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCirclePlay, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
export default function ContactForm() {
    return (
        <div className='container ContactForm'>
            <div className='ContactForm-side1'>
                <div className='side1Top'>
                    <div className='side1TopContent'>
                    <FontAwesomeIcon icon={faPhone} />
                        <div>
                            <h5>Call Us 7/24</h5>
                            <h4>+208-555-0112 </h4>
                        </div>
                    </div>
                    <div className='side1TopContent'>
                    <FontAwesomeIcon icon={faEnvelope} />
                        <div>
                            <h5>Make a Quote</h5>
                            <h4>Infotech @ gmail . com </h4>
                        </div>
                    </div>
                    <div className='side1TopContent'>
                    <FontAwesomeIcon icon={faLocationDot } />
                        <div>
                            <h5>Location</h5>
                            <h4>4517 Washington ave. </h4>
                        </div>
                    </div>
                </div>
                <div className='side1Bottom'>
                    <img src={video} alt="" />
                    <div className='iconBg'>
                    <FontAwesomeIcon icon={faCirclePlay} />
                    </div>

                </div>
            </div>
            <div className='ContactForm-side2'>
                <h2>Ready to Get Started?</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, corrupti. Velit, atque suscipit. Voluptatem, laborum.</p>
                <form>
                    <div className='text'>
                        <div>
                            <label > Your Name* </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label> Your email* </label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className='message'>
                        <label > Your message* </label>
                        <textarea name="message" id=""></textarea>
                    </div>
                    
                </form>
                <button>send message <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    )
}
