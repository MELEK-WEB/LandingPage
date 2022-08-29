import './about.css'
import image from '../assets/img/image.png'
import vector from '../assets/img/Vector.png'
import transaction from '../assets/img/transaction.png'

export default function AboutUs() {
  return (
    <>
            <img src={vector}alt='vector' className='vector' style={{top:'1000px',left:"35%"}}/>
            <img src={image} alt='imagex ' className='dollars'></img>
            <div className='aboutus'>
                <h1 className='middleHeading'>
                         About Us
                </h1>
            </div>
            <div className='Transaction_section'>
            <img src={transaction}alt='transaction' className='Transaction_image'/>

                <div className='Transaction_item'>
                              <h4 className='title'>Lorem ipsum</h4>
                              <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                              </p>
                              <br/>
                              <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              </p>
                              <h3>1412 +</h3>
                              <p style={{width: '250px',height: '21px'}}>Lorem ipsum dolor sit amet</p>
                              <h3>5353553$</h3>
                              <p style={{width: '250px',height: '21px'}}>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className='Transaction_item'>
                              <h4 className='title'>Lorem ipsum</h4>
                              <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                              </p>
                              <p>
                                <br/>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              </p>
                              <br/>
                              <h3>3 +</h3>
                              <p style={{width: '250px',height: '20px'}}>Lorem ipsum dolor sit amet</p>
                              <h3>24142$</h3>
                              <p style={{width: '250px',height: '21px'}}>Lorem ipsum dolor sit amet</p>
                  </div>
            </div>
            
    </>
  
  )
}
