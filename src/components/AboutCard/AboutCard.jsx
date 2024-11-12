import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './AboutCard.css'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'

export default function AboutCard({AboutPhoto, name,job}) {
    return (
        <div className='AboutCard'>
            <img src={AboutPhoto} alt="" />
            <div className='AboutCardDesc'>
                <div className='icon'>
                <FontAwesomeIcon icon={faShareNodes} />
                </div>
                <div className='hhh'>
                <h2>{name}</h2>
                <h5>{job}</h5>
                </div>
            </div>
        </div>
    )
}
