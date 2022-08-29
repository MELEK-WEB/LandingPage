import React from 'react'
import './tesimonials.css'
import me from '../assets/img/me.png'
import imageTest from '../assets/img/imageTest.png'
export default function Testimonials() {
const TestimonialsList  = [
    {
        descr : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        name: 'Melek , 23 years',
        post : 'Manager'
    },
    {
        descr : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        name: 'Melek , 23 years',
        post : 'Java developer'
    },
    {
        descr : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        name: 'Melek , 23 years',
        post : 'Web  developer'
    },
]   

  return (
    <div className='Testimonials'>

                        <h2>Testimonials</h2>
                        <img src={imageTest} alt = 'imageTest' className='imageTest'/>
                    <div className='TestimonialsList'>
                        {TestimonialsList.map((t)=>{
                            return(
                                <div className='items'>
                                            <p>{t.descr}</p>
                                            <div className='MeInfo'>
                                                <img src={me} alt = 'me'/>
                                                <span>{t.name} {t.post}</span>

                                            </div>
                                </div>
                            )
                        })}
                        </div>


    </div>
  )
}
