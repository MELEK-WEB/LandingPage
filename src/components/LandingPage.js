import React from 'react'
import AboutUs from './AboutUs'
import Benifits from './Benifits'
import ContactUs from './ContactUs'
import FAQ from './FAQ.js'
import Footer from './Footer'
import Home from './Home'
import Menu from './Menu'
import Testimonials from './Testimonials'
import Tutorial from './Tutorial'

export default function LandingPage() {
  return (
    <div className='LandingPage'>
            <div className='App'> 
                  <Menu/>
                  <Home/>
                <AboutUs/>
            </div>
            
              <Tutorial/>
              <div className='App'>
                  <FAQ/>
                  <br/>
                <Benifits/>
                <br/>
                <ContactUs/>

              </div>
              
              <Testimonials/>
              <br/>
              <Footer/>
    </div>
  )
}
