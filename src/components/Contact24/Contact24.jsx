import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Contact24.css'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function Contact24({ image, x,title}) {
    return (
        <div className={x ? 'Contact24' : 'Contact24-2'}>
            <div className='Contact24-son'>
                <img className={x? '' : 'imgimg'} src={image} alt="" />
                <div className='contact24-side'>
                    <div className='contact24-side-1'>
                        {x && <div className='title-Contact24'>
                            <FontAwesomeIcon icon={faArrowLeft} />
                            <h5>CONTACTUS</h5>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>}
                        <h2>{title}</h2>
                    </div>
                    <button className='contact24-side-2'>
                        TALK TO A SPECIALIST
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    )
}
