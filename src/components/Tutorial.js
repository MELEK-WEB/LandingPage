import './tutorial.css'
import tutorial from '../assets/img/tutorial.png'
export default function Tutorial() {
  return (
    <div className="tutorial">
        <div className='container'>
        <h1>Tutorial</h1>
            <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magn
            </p>
            <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magn
            </p>

        </div>
        <img src= {tutorial}alt='Tutorial' className='image' />
            
    </div>
  )
}
