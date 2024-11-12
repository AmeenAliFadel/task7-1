import './PricingCard.css'
import photo from './../../assets/images/pricingIcon1_1.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCheck, faQuestion, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function PricingCard({color}) {
    return (
        <>
        <div className='PricingCard'>
            <div className= {color ? 'PricingCardHeader' : 'PricingCardHeader2'} >
                <div>
                    <h2>Regular Plans</h2>
                    <p><span>$49</span>/Month </p>
                </div>
                <img src={photo} alt="" />
            </div>
            <ul>
                <li>
                    <div><FontAwesomeIcon icon={faCheck} className='yes' /> 00 GB SSD Storage</div> 
                    <FontAwesomeIcon icon={faQuestion} className='question' /> </li>
                <li>
                    <div><FontAwesomeIcon icon={faCheck} className='yes' /> Weekly Backuos</div>  
                    <FontAwesomeIcon icon={faQuestion} className='question' /></li>
                <li>
                    <div><FontAwesomeIcon icon={faCheck} className='yes' /> Unlimited Free SSL</div> 
                    <FontAwesomeIcon icon={faQuestion} className='question' /></li>
                <li>
                    <div><FontAwesomeIcon icon={faCheck} className='yes' /> 24/7 System Monitoring </div>
                    <FontAwesomeIcon icon={faQuestion} className='question' /></li>
                <li>
                    <div><FontAwesomeIcon icon={faCheck} className='yes' /> Free Domain ($9.99 Value)</div> 
                    <FontAwesomeIcon icon={faQuestion} className='question' /></li>
                <li>
                    <div><FontAwesomeIcon icon={faXmark} className='no' />Frame 164236</div>  
                    <FontAwesomeIcon icon={faQuestion} className='question' /></li>
                <li>
                    <div><FontAwesomeIcon icon={faXmark} className='no' />20+ Payment Methods</div> 
                    <FontAwesomeIcon icon={faQuestion} className='question' /></li>
            </ul>
            <button className={color ? 'button1' : 'button2'} >GET STARTED NOW <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
        </>
    )
}
