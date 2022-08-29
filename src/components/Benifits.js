import React from 'react'
import './benefits.css'
import firstIcon from '../assets/img/firstIcon.png'
import secondIcon from '../assets/img/secondIcon.png'
import thirdIcon from '../assets/img/thirdIcon.png'

export default function Benifits() {

const BenefitsList = [
    {
        number : '01',
        name : 'Set up a group chat with friends',
        icon  : firstIcon,
        description : 'Find your e-bike and accessories, get insured, choose your maintenance and subscription plan.'
    },
    {
        number : '02',
        name : 'Commit to a personal goal',
        icon  : secondIcon,
        description : 'Find your e-bike and accessories, get insured, choose your maintenance and subscription plan.'
    },
    {
        number : '03',
        name : 'Commit to a personal goal',
        icon  : firstIcon,
        description : 'Find your e-bike and accessories, get insured, choose your maintenance and subscription plan.'
    },
    {
        number : '04',
        name : 'Commit to a personal goal',
        icon  : thirdIcon,
        description : 'Find your e-bike and accessories, get insured, choose your maintenance and subscription plan.'
    },
]

  return (
    <>
    <h1 className='middleHeading'>Benefits</h1>
            <div className='Benefits'>

            
                        {
                            BenefitsList.map((b)=>{
                                return(<>
                                    <div className='benifitInfo'>      
                                                <h1>{b.number}</h1>
                                                <h1 style={{color : '#1E1E1E',fontSize:'34px'}}>{b.name}</h1>
                                                <img src={b.icon} alt={b.icon} className={b.icon}></img>
                                                <p>
                                                    {b.description}
                                                    
                                                </p>
                                       
                                    </div>
                                    <hr/>
                                    </>
                                )
                            })
                        }

     

    </div>
    </>
  )
}
