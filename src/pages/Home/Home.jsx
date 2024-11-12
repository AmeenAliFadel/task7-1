import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Logos from '../../components/Logos/Logos'
import Services from '../../components/Services/Services'
import Video from '../../components/Video/Video'
import Numbers from '../../components/Numbers/Numbers'
import Pricing from '../../components/Pricing/Pricing'
import Contact24 from '../../components/Contact24/Contact24'
import Testimonials from '../../components/Testimonials/Testimonials'
import Blog from '../../components/Blog/Blog'
import photo1 from './../../assets/images/ctaThumb1_1.webp'
import photo2 from './../../assets/images/ctaThumb.webp'
import Footer from '../../components/Footer/Footer'

export default function Home() {
    return (
        <>
        <Navbar x={true}/>
        <Hero />
        <Logos x={true}/>
        <Services y={true}/>
        <Video />
        <Numbers />
        <Pricing />
        <Contact24 image={photo1} x={true} title={"24/7 Expert Hosting Support Our Customers Love"}/>
        <Testimonials />
        <Blog />
        <Contact24 image={photo2} x={false} title={"Stay Connected With Cutting Edge IT"} />
        <Footer margin={true} />
        </>
        
    )
}
