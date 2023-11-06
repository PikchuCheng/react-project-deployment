
import { useState } from 'react'
import React from 'react'


   
export default function Contact() {


    const [data, setData] = useState({
        firstname:"",
        lastname:"",
        email:""
        
        
        })

    const [showThankYou, setShowThankYou] = useState(false);


        function handleChange(event) {
          const { name, value } = event.target;
          setData({
            ...data,
            [name]: value
          });
        }

      function handleSubmit (event) {
      event.preventDefault()
      
      console.log(data)

      if (data.firstname && data.lastname && data.email ) {
        setShowThankYou(true);

        document.querySelector('.form-container').classList.add('blur');
      }
   


    }
  


  return (
    <>

<div className="form-container">

<h1>SUBSCRIBE</h1>
<h4>Never miss a recipe!</h4>
    
    
<p>Sign up with your email address to receive news and updates.</p>
    


    <form className='container' onSubmit= {handleSubmit}>
    
      <br/>
      <input name = "firstname" onChange= {handleChange} type='text' placeholder='First Name' />
     
      <input name = "lastname"  onChange= {handleChange} type='text' placeholder='Last Name' />
     
      <br/>
      <input name = "email" onChange= {handleChange} type='email' placeholder='Email Address' />
      <br/>

     

    {/* <h3>Subscription</h3>
    <input value= "one month" onChange= {handleChange} name='sub' type='radio' /><label>one month</label><br />
    <input value= "six month"  onChange= {handleChange} name='sub' type='radio' /><label>six month</label><br />
    <input value= "No"  onChange= {handleChange} name='sub' type='radio' checked={true}/><label>no thanks</label><br />
 */}


 
 

 
        <button className='button' type="submit">Sign Up</button>
       
        <br />
        <h5>We respect your privacy.</h5>
       
    </form>

    </div>


    {showThankYou && (
      

        <div className="thank-you-popup">
          <p>Thank you for your submission</p>
        </div>


      )}
     
    </>

        
    
  )
}
