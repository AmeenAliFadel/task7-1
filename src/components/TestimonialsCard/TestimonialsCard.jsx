import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TestimonialsCard.css'
import { faQuoteRight, faStar} from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
export default function TestimonialsCard({ photo,blue }) {
    return (
        <>
            <div className={ blue ? 'TestimonialsCard' : 'TestimonialsCardBlue' } >
                <div className='icons-div'>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={regularStar} />
                </div>
                <p className='card-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus voluptatum commodi molestiae optio sunt ipsa autem! Repellat, beatae assumenda!</p>
                <div className='first-div'>
                    <div className='second-div'>
                        <img src={photo} alt="" />
                        <div>
                            <h4>Kristin Watson</h4>
                            <h5>Web Designer </h5>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faQuoteRight} />
                </div>
            </div>
        </>
    )
}
