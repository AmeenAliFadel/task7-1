import './Pricing.css'
import plane from './../../assets/images/pricingIcon1_2.svg'
import PricingCard from '../PricingCard/PricingCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function Pricing() {
    return (
        <div className='PricingSection'>
            <div className='pricing-services'>
                <div className='div1'>
                <FontAwesomeIcon icon={faArrowLeft} />
                    <h5>OUR PRICING</h5>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <h2>
                    Our Awesome Pricing Plans
                </h2>
                <div className='div2'>
                    <div className='buttons'>
                        <button>Monthly</button>
                        <button>Yearly</button>
                    </div>
                    <img src={plane} alt="" />
                    <p>save 25%</p>
                </div>
            </div>
            <div className='PricingCards container'>
                <PricingCard color={true}/>
                <PricingCard color={false} />
                <PricingCard color={true}/>
            </div>

        </div>

    )
}
