import './contact.css'
import contact from '../assets/img/contact.png'
import contact1 from  '../assets/img/contact1.png'
export default function ContactUs() {
  return (
    <div className='ContainerPage'>

            <img src= {contact} alt= {contact} className ='contact'/>
            <img src= {contact1} alt={contact1} className= 'contact1' />
            <div className="ContactUs">

                <h4>Contact Us</h4>
                

                <div className="ContacForm">
                                    <div className="contactItem"> 
                                                <div className='inputGroup'>
                                                        <label>Name </label>
                                                        <input type='text' className="input" />
                                                        <label>Email </label>
                                                        <input type= 'email' className="input" />
                                                        <label> Phone</label>
                                                        <input type='text' className="input" />
                                                </div>
                                                <div className='inputGroup'>
                                                        <label>Description </label>
                                                        <input type='text' className="inputDescription" />
                                                        <button className="submitBtn">Submit</button>                         
                                                </div>


                                            
                                        </div>
                                   
                </div>

            </div>

    </div>
  )
}
