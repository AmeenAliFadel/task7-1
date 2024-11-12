import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './BlogCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BlogCard({ pic, title, date, des, smallImg, stay }) {
    return (
    
        <div className={stay ? 'blog-dad' : 'blog-dad2'} >
            <img className='bigImg' src={pic} alt="" />
            <div className='Blog-card-div'>
                <div className='first-blog-card-div'>
                    <span className='Title-blog' >{title}</span>
                    <span className='date'>{date}</span>
                </div>
                <h3>{des}</h3>
                <div className='img-button'>
                    <div className='img-text'>
                        <img src={smallImg} alt="" />
                        <div>
                            <h5>Admin</h5>
                            <h6>Co.Founder</h6>
                        </div>
                    </div>
                    <button><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
    )
}
