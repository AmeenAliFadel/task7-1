import TestimonialsCard from '../TestimonialsCard/TestimonialsCard'
import './Testimonials.css'
import pic1 from './../../assets/images/testiThumb3_1.webp'
import pic2 from './../../assets/images/testiThumb3_2.webp'
import pic3 from './../../assets/images/testiThumb3_3.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Testimonials() {
    return (
        <div className='Testimonials'>
            <div className='Testimonials-services'>
                <div className='TestimonialsDiv1'>
                <FontAwesomeIcon icon={faArrowLeft} />
                    <h5>TESTIMONIALS</h5>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <h2>
                    Our Latest Client Feedback
                </h2>
            </div>
            <div className='TestimonialsCards container'>
            <TestimonialsCard photo={pic1} blue={true}/>
            <TestimonialsCard photo={pic2} blue={false}/>
            <TestimonialsCard photo={pic3} blue={true}/>
            </div>
            
        </div>
    )
}
