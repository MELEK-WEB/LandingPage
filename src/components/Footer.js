import React from 'react'
import './footer.css'
import logo from '../assets/img/logo.png'
import {AiOutlineFacebook,AiFillInstagram,AiOutlineTwitter} from 'react-icons/ai'
import{SiAppstore} from 'react-icons/si'
import {IoLogoGooglePlaystore} from 'react-icons/io5'
export default function Footer() {
  return (
    <div className='Footer'>
                 <div className='FooterHeader first'> 
                    <img  src={logo} alt="logo" className="logo"/>
                    
                    <div className='item iItem1'>
                                <label className='labels'>About Us</label>
                                <label className='labels'> Benefits</label>
                                <label className='labels'>Tutorials</label>
                                <label className='labels'>Testimonials</label>
                                <label className='labels'>Support</label>
                    </div>
                 
                 </div>


                 <div className='FooterHeader first' > 
                             <label className='labels '>We here:</label>
                            <div className='item item2'>
                                            <AiOutlineFacebook   className ='icons' size='2em' />
                                            <AiOutlineTwitter   className ='icons' size='2em' />
                                            <AiFillInstagram   className ='icons' size='2em' />
                                                    
                            </div>
                 
                 </div>
                 <div className='FooterHeader'> 
                 <label className='labels'>Download app:</label>
                            <div className='item item2'>
                            <SiAppstore   className ='icons' size='2em' />
                             <IoLogoGooglePlaystore   className ='icons' size='2em' />
                    
                                                    
                            </div>
                 
                 </div>

</div>
  )
}
