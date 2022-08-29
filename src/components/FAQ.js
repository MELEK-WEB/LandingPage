import './faq.css'
import apple from '../assets/img/apple.png'
import mail from '../assets/img/mail.png'
import sendMoney from '../assets/img/sendMoney.png'
export default function FAQ() {



    const FAQList = [
        {
            question : 'How do I use the app ?',
            answer: 'You can use the app by downloading it from the App Store or Google Play Store.Once you have downloaded the app, you can create a new account or log in to an existing account.'
        },
        {
            question : 'How do I use the app ?',
            answer: 'You can use the app by downloading it from the App Store or Google Play Store.Once you have downloaded the app, you can create a new account or log in to an existing account.'
        },
        {
            question : 'How do I use the app ?',
            answer: 'You can use the app by downloading it from the App Store or Google Play Store.Once you have downloaded the app, you can create a new account or log in to an existing account.'
        },

    ];
    

     

  return (
    <div className="FAQ">
                <h1 className="middleHeading">
                                        FAQ
                </h1>
             
               
               {FAQList.map((faq)=>{
                return(
                    <>
                    <h3>{faq.question}</h3>
                            <p >
                               {faq.answer}
                               <hr/>
                            </p>
                        
                    
                </>
                )
               })}
                
                <div className='SendMoneyBox'>
                    <div className='SendMoneyItem'>
                    <h2>
                    Send money to your loved ones using crypto
                    </h2>
                    <p>
                    With RemitAfrika, you can truly become borderless with your money. Sign up today
                    </p>
                    <div className='bootomButtons'>
                            <button className='Btn '>Get started {' '} {' >'} </button>
                            <div className='icons'>
                                <img src={apple}alt='home' className='icon' />
                                <img src={mail}alt='home' className='icon' />                      
                            </div>
                            
                            
                    </div>
                </div>
                <div className='SendMoneyItem'>
                        <img src={sendMoney}alt='sendMoney' className='sendMoney' />       
                </div>
                   

                </div>
               

    </div>
  )
}
