import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Card.css'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

export default function Card({ photo, title, des, x,number }) {
    return (
        <>
            <div className={x?'cardServices': 'cardNumbers' }>
                {x && <div className='img-border'>
                    <img src={photo} alt="" />
                </div>}
                {!x&& <h2 className='num'>{number}</h2> }
                <h3>{title}</h3>
                <p>{des}</p>
                {x && <button>read more <FontAwesomeIcon icon={faAnglesRight} /></button>}
            </div>
        </>
    )
}
