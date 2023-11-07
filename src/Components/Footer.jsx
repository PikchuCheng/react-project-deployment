<<<<<<< HEAD
=======
import React from 'react'
import { Link } from 'react-router-dom'
import NotFound from '../pages/NotFound.jsx'

>>>>>>> c1bd5d444b7cea94c9db1a94134267a18f60537d
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className='footer'>
    

    <div className='footer-section'>
            <p className='title'>UseRecipes</p>
            <p >UseRecipes is a place where you can get delicious recipes all over the world! With UseRecipes, you'll have the world's most delectable dishes at your fingertips, ready to be prepared and savored. Join us on this gastronomic adventure, and let your taste buds travel the world, one delightful recipe at a time.</p>
           

        </div>


      

        <div className='footer-section'>
            <p className='title'>Contact</p>
            <p >userecipes_foodieclub@gmail.com</p>
            
            <p>+49 030 17171717</p>
          

        </div>

    

        <div className='footer-section'>
            <p className='title'>Social Media</p>
            <p > <FontAwesomeIcon icon={faFacebook} className="social-icon" /><Link to="/404">Facebook</Link> </p>
            <p > <FontAwesomeIcon icon={faInstagram} className="social-icon"  /><Link to="/404">Instagram</Link></p>
            <p > <FontAwesomeIcon icon={faTwitter} className="social-icon" /><Link to="/404">Twitter</Link></p>
            

        </div>

        <div className='footer-section'>
           
           
           <p> | <a href='#'>About us</a> | <a href='#'>Terms and Condition </a>|</p>
            
           </div>
 


        <div className='footer-section'>
           
        <p>An der Friedrichshohe 1</p>
            <p>	Kelsterbach</p>
            <p>65451 Hesse ,Germany</p>
        
       </div>

     

          <div className='footer-section'>
           
           <p> Copyright © 2023 UseRecipes  | All right Reserved</p>

       </div>

     
        
        
        
        </div>
  )
}
