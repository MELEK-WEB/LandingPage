import React from 'react'
import  './home.css'
import home from '../assets/img/home.png'
import vector from '../assets/img/Vector.png'
import apple from '../assets/img/apple.png'
import mail from '../assets/img/mail.png'
import moneyBag from '../assets/img/money-bag.png'
import time from '../assets/img/time-clock.png'
import notification from '../assets/img/notification-alert.png'


export default function Home() {
  return (
        <>
    <div className='HomePage'>

            <div className='cardDescription'>
            <img src={vector}alt='vector' className='vector' />
                    <h1 className='heading'>
                        SEND MONEY IN <strong>RELIABLY</strong> WAY
                    </h1>
                    <p className='paragraphe'>
                    Send, exchange & receive money globally in seconds.
                    Create virtual Mastercards that work anywhere online.
                    </p>
                    <div className='bootomDescription'>
                            <button className='btn_getstarted '>Get started for free {' >'} </button>
                            <div className='icons'>
                                <img src={apple}alt='home' className='icon' />
                                <img src={mail}alt='home' className='icon' />                      
                            </div>
                            
                            
                    </div>
        
            </div>
            <img src={home}alt='home' className='homeImg' />
       
    </div>
    <div className='Benifits'>
                        <div className='benefit'>
                                <img className='benefitIcon' src={moneyBag} alt ='moneybag'/>
                                <div className='contentBenefit'>

                              
                                      <h3 className='benifitTitle'>
                                      Safe your Money
                                        </h3>  
                                        <p className='benefitDesc'>
                                        Lorem ipsum dolor sit amet                                      
                                        </p>
                                </div>
                        </div>
                        <div className='benefit'>
                                <img className='benefitIcon' src={notification} alt ='notification'/>
                                <div className='contentBenefit'>

                                

                                
                                      <h3 className='benifitTitle'>
                                      Helpful Notifications
                                        </h3>  
                                        <p className='benefitDesc'>
                                        Lorem ipsum dolor sit amet                                      
                                        </p>
                                        </div>
                        </div>
                        <div className='benefit'>
                                <img className='benefitIcon' src={time} alt ='time'/>
                                <div className='contentBenefit'>

                                
                                      <h3 className='benifitTitle'>
                                         Invest on Time
                                        </h3>  
                                        <p className='benefitDesc'>
                                        Lorem ipsum dolor sit amet                                      
                                        </p>
                                </div>
                        </div>

        </div>
    </>
  )
}
