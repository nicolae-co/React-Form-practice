import './App.css'
import { useState } from 'react'
function App() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinNewsLetter: true
  })

  function handleChange(event){
    const {name, value, type, checked} = event.target
    setFormData(prevState =>({      
        ...prevState,
        [name] : type === "checkbox" ? checked : value      
      }))
  }

  function handleSubmit(event){
    event.preventDefault()
    if(formData.password === formData.passwordConfirm){
      console.log("Successfully signed up")
    }else{
      console.log("Passwords do not match")
      return
    }

    if(formData.joinNewsLetter){
      console.log("Thanks for signing up for our newsletter!")
    }
  }

  return (
    <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    name="password"
                    value={formData.password1}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    name="passwordConfirm"
                    value={formData.password2}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        checked={formData.joinNewsLetter}
                        onChange={handleChange}
                        name="joinNewsLetter"
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
  )
}

export default App
