import {Link} from 'react-router-dom'
import { useState } from 'react'

export default function Contact() {

    const [data, setData] = useState({
        firstname:"",
        lastname:"",
        email:"" 
    })

    const [showThankYou, setShowThankYou] = useState(false);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

        function handleChange(event) {
          const { name, value } = event.target;
          setData({
            ...data,
            [name]: value
          });
          setIsCheckboxChecked(event.target.checked)
        }

      function handleSubmit (event) {
      event.preventDefault()

      console.log(data)

      if (isCheckboxChecked && data.firstname && data.lastname && data.email) {
        setShowThankYou(true);
        
        document.querySelector('.form-container').classList.add('blur');
       
      }else{
        alert("Please fill out all fields") 
      }
    }
  
  return (
    <>
      <div className="form-container">
        <h1>Subscribe</h1>
        <h2>Never miss a recipe!</h2>

        <h2>Sign up with your email address to receive news and updates.</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <br />
            <input
              name="firstname"
              readOnly={isCheckboxChecked}
              id="firstname"
              onChange={handleChange}
              type="text"
              placeholder="First Name"
            />

            <input
              name="lastname"
              readOnly={isCheckboxChecked}
              id="lastname"
              onChange={handleChange}
              type="text"
              placeholder="Last Name"
            />
            <br />
          </div>

          <div className="input-container1">
            <input
              name="email"
              readOnly={isCheckboxChecked}
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
            />
            <br />
          </div>

          <input type="checkbox" name="checkbox" onChange={handleChange} />

          <label className="term">
            By clicking this box, you agree UseRecipes to collect your name and
            email to receive our latest newsletter!
          </label>

          <div className="button-container">
            <button className="sing-up-button" type="submit">
              SIGN UP
            </button>
          </div>
        </form>

        <div>
          <p className="bottom-signup">
            At UseRecipes we value all of our customers and understand that you
            care about the privacy and security of your personal information.
            Our Privacy Policy applies to UseRecipes&apos;s collection, storage, use
            and disclosure of personal information that may be collected by us
            when you interact with Barnes & Noble, such as when you visit our
            stores or websites, or use our devices or applications, participate
            in our Member Program, or deal with customer service.
          </p>
        </div>
      </div>

      {showThankYou && (
        <div className="thank-you-popup">
          <h2>Thank you for your submission!</h2>
          <button
            className="button-submit"
            onClick={() => setShowThankYou(false)}
          >
            <Link to="/"> Back to Home</Link>
          </button>
        </div>
      )}
    </>
  );
}
