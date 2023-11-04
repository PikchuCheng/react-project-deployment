
import { useState } from 'react'
import React from 'react'


   
export default function Contact() {


    const [user, setUser] = useState({
        email:"",
        password:"",
        food:{pizza:false,
        hamburger:false,
        falafel:false,
        salad: false,
        subscription: "No"
    
    }})
    
    const handleChange = (e) =>{
    
      if(e.target.type === 'checkbox' ){
    
        return setUser((user)=>({...user, food: {...user.food, [e.target.name]: e.target.checked}}))
    
    
      }
    
      if(e.target.type === "radio"){
    
        return setUser((user)=>({...user, subcription:e.target.value}))
      }
    
      setUser((user)=> ({...user, [e.target.name]:e.target.value}))
    
    
    }
    
    console.log(user)
    
    const handleSubmit = (e) =>{
    
      e.preventDefault();
    
      fetch("http://jsonplaceholder.typicode.com/users",{
    
      method: "POST",
      body: JSON.stringify(user),
      header :{"content-type": "application/json: charset= UTF-8"},
    
    
    
    
      })
    
      .then((res)=> {
        console.log(res)
    
        if(res.ok){res.json()} else (console.log("request failed"))
        .then((data)=> console.log(data))
    
    
    
      })
     
    }
  




  return (
    <>

<h4>Never miss a recipe!</h4>
    
    
<p> Subscribe to the Closet Cooking email newsletter and have every new recipe sent directly to your inbox!</p>
    
<p>Subscribe now and get a FREE copy of my latest cookbook The Best of Closet Cooking 2023! </p>
    
   

    <h1>sign Up here:</h1>


    <form onSubmit= {handleSubmit}>
      <label>username:</label>
      <br/>
      <input name = "username" onChange= {handleChange} type='text' placeholder='enter your username' />
      <br/>
      <label>email:</label>
      <br/>
      <input name = "email"  onChange= {handleChange} type='email' placeholder='enter your email' />
      <br/>
      <label>password:</label>
      <br/>
      <input name = "password" onChange= {handleChange} type='password' placeholder='enter your password' />
      <br/>

      <h3>choose your favarie food:</h3>
      <input name = "pizza" onChange= {handleChange} type="checkbox" /><label>pizza</label><br/>
      <input name = "hamburger" onChange= {handleChange} type="checkbox" /><label>hamburger</label><br/>
      <input name = "falafel"  onChange= {handleChange} type="checkbox" /><label>falafel</label><br/>
      <input name = "salad"  onChange= {handleChange} type="checkbox" /><label>salad</label><br/>


    <h3>Subscription</h3>
    <input value= "one month" onChange= {handleChange} name='sub' type='radio' /><label>one month</label><br />
    <input value= "six month"  onChange= {handleChange} name='sub' type='radio' /><label>six month</label><br />
    <input value= "No"  onChange= {handleChange} name='sub' type='radio' checked={true}/><label>no thanks</label><br />




    </form>
     
    </>

        
    
  )
}
