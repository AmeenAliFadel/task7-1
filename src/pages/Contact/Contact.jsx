import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero2 from '../../components/Hero2/Hero2'
import ContactForm from '../../components/ContactForm/ContactForm'
import Map from '../../components/Map/Map'
import Footer from '../../components/Footer/Footer'
import FooterKid from '../../components/FooterKid/FooterKid'

export default function Contact() {
    return (
        <>
        <Navbar x={false}/>
        <Hero2 title={'Contact Us'} h5={'Contact Us'}/>
        <ContactForm />
        <Map />
        <FooterKid />
        <Footer  margin={false}/>
        </>
        
    )
}
