import './Hero.css'
import profileShape from './../../assets/images/profileShape1_1.webp'
import heroThumb from './../../assets/images/heroThumb1_1.webp'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faStar, faWaveSquare } from '@fortawesome/free-solid-svg-icons'
export default function Hero() {
    return (
        <div className='Hero '>
            <div className='side-1'>
                <div className='side-1-content'>
                    <div className='side-1-child'>
                    <FontAwesomeIcon icon={faWaveSquare} />
                        Everything you need to create a website
                    </div>
                    <h1>Business Innovation With IT Services Expertise</h1>
                    <ul>
                        <li><FontAwesomeIcon icon={faCheck} /> Deployment and support</li>
                        <li><FontAwesomeIcon icon={faCheck} /> Flexibility and Adaptability</li>
                    </ul>
                    <ul>
                        <li><FontAwesomeIcon icon={faCheck} /> Discovery and Analysisty</li>
                        <li><FontAwesomeIcon icon={faCheck} />Competitive Advantage</li>
                    </ul>
                    <button>
                        GET STARTED
                        <FaLongArrowAltRight />
                    </button>
                </div>
                <div className='side-1-box'>
                    <div className='side-1-1'>
                        <div>
                            <h2>Trustipilot</h2>
                            <img src={profileShape} alt="" />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <p>450+ reviews</p>
                        </div>
                    </div>
                    <div className='side-1-1'>
                        <div>
                            <h2>google</h2>
                            <img src={profileShape} alt="" />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <p>450+ reviews</p>
                        </div>
                    </div>
                </div>
        </div>
            <div className='side-2'>
                <img  src={heroThumb} alt="" />
            </div>

        </div>
    )
}
