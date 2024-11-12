import Card from '../Card/Card'
import './Services.css'
import photo1 from './../../assets/images/serviceIcon1_1.svg'
import photo2 from './../../assets/images/serviceIcon1_2.svg'
import photo3 from './../../assets/images/serviceIcon1_3.svg'
import photo4 from './../../assets/images/serviceIcon1_4.svg'
import AboutCard from '../AboutCard/AboutCard'
import AboutPhoto1 from './../../assets/images/04.webp'
import AboutPhoto2 from './../../assets/images/05.webp'
import AboutPhoto3 from './../../assets/images/06.webp'
import AboutPhoto4 from './../../assets/images/07.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function Services({ y }) {
    return (
        <>
            <div className='container Services'>
                <div className='title-services'>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    {y&& <h5>our services</h5>}
                    {!y&& <h5>Team Members</h5>}
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <div className='title-services2'>
                    {y&&<h2>Elevating Businesses With IT Ingenuity</h2>}
                    {!y&&<h2>Our Dedicated Team Members</h2>}
                    <div className='buttons'>
                        <button><FontAwesomeIcon icon={faArrowLeft} /></button>
                        <button><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>
                {y && <div className='cards'>
                    <Card
                        x={true}
                        photo={photo2}
                        title={"Woo Commerce"}
                        des={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, exercitationem."} />
                    <div className='mobileMood'>
                        <Card
                            x={true}
                            photo={photo3}
                            title={"CRM solutions"}
                            des={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, exercitationem."} />
                    </div>
                    <div className='mobileMood'>
                        <Card
                            x={true}
                            photo={photo4}
                            title={"Web Design"}
                            des={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, exercitationem."} />
                    </div>
                    <div className='mobileMood'>
                        <Card
                            x={true}
                            photo={photo1}
                            title={"Data Guord Sentinel"}
                            des={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, exercitationem."} />
                    </div>
                </div>}
                {!y && <div className='cards'>
                    <AboutCard
                        AboutPhoto={AboutPhoto1}
                        job={"Web Designer"}
                        name={"Masirul Islam"}/>
                    <AboutCard
                        AboutPhoto={AboutPhoto2}
                        job={"Cyber Expert"}
                        name={"Jessica Mardol"}/>
                    <AboutCard
                        AboutPhoto={AboutPhoto3}
                        job={"Web Expert"}
                        name={"Arnold Hemingway"}/>
                    <AboutCard
                        AboutPhoto={AboutPhoto4}
                        job={"Data Analyst"}
                        name={"Shikon Haque"}/>
                </div>}

            </div>

        </>
    )
}
