import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero2 from '../../components/Hero2/Hero2'
import Logos from '../../components/Logos/Logos'
import Services from '../../components/Services/Services'
import Footer from '../../components/Footer/Footer'
import AboutLogos from '../../components/AboutLogos/AboutLogos'
import FooterKid from '../../components/FooterKid/FooterKid'

export default function About() {
    return (
        <>
        
        <Navbar x={false} />
        <Hero2 title={'About Us'} h5={'About Us'}/>
        <Logos x={false} />
        <Services y={false}/>
        <AboutLogos />
        <FooterKid />
        <Footer  margin={false}/>
        </>
        
    )
}
