import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './FooterKid.css'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function FooterKid() {
    return (
        <div className='Footerdad '>
            <div className='FooterKid '>
                <div className='child1-2'>
                    <div className='iconsdad'>
                    <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div>
                        <h5> Address</h5>
                        <h3> 4648 Rocky Rood Philadelphia PA</h3>
                    </div>
                </div>
                <div className='child1-2'>
                    <div className='iconsdad'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div>
                        <h5>Send Email</h5>
                        <h3> info@exmple.com</h3>
                    </div>
                </div>
                <div className='child1'>
                    <div className='iconsdad'> 
                    <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div>
                        <h5>Call Emergency</h5>
                        <h3>+88 0123 654 99</h3>
                    </div>
                </div>
            </div>
        </div>

    )
}
