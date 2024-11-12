import './AboutLogos.css'
import photo from './../../assets/images/envato.jpg'
export default function AboutLogos() {
    return (
        <div className='AboutLogos '>
            <div className='AboutLogosTitle'>
                <div className='line'></div>
                <h3>1k + Brands Trust Us</h3>
                <div className='line'></div>
            </div>
            <div className='AboutLogosImg'>
                <img className='photo1' src={photo }alt="" />
                <img className='photo1' src={photo }alt="" />
                <img src={photo }alt="" />
                <img className='photo1' src={photo }alt="" />
                <img className='photo1' src={photo }alt="" />
            </div>
        </div>
    )
}
