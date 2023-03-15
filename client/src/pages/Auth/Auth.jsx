import React,{useState} from 'react'
import{useDispatch} from 'react-redux'
import{useNavigate} from 'react-router-dom'
import './Auth.css'

import{signup ,login} from'../../actions/auth'
import icon from'../../assets/icon.png'

const Auth = () => {

const[isSignup,setIsSignup]= useState (false)
const[name,setName] = useState('')
const[email,setEmail] = useState('')
const[password,setPassword] = useState('')
const dispatch=useDispatch()
const navigate=useNavigate()

const handleSwitch = () => {
  setIsSignup(!isSignup)
}
const handleSubmit=(e)=>{
e.preventDefault()
if(!email && !password){
  alert('Enter email and password')
}
if(!isSignup){
  if(!name){
    alert("Enter a name to continue")
  }
 dispatch(signup({name,email,password},navigate))
}else{
dispatch(login({ email,password},navigate))
}
}
  return (
    <section class='auth-section'>
     
      <div class='auth-container-2'>
         {!isSignup && <img src={icon} alt='stack overflow' class='login-logo'/>}
         <form onSubmit={handleSubmit}>
          {
            isSignup &&(
              <label htmlFor='name'>
                <h4>Display Name</h4>
                <input type="text" id='name'name='name' onChange={(e) => {setName(e.target.value)}} />
              </label>
            )
          }
           <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name='email' id='email' onChange={(e) => {setEmail(e.target.value)}}/>
            </label>
            <label htmlFor="password">
              <div style={{display:"flex",justifycontent:"space-between"}}>
            <h4>Password</h4>
            {!isSignup && <p style={{color:"#007acb",fontSize:'13px'}}>Forgot password</p>}
            </div>
            <input type="password" name='password' id='password' onChange={(e) => {setPassword(e.target.value)}} />
            {isSignup && <p> Passsword must contain at least eight characters<br />,including at least 1 letter and 1 number and<br /> 1 special characters</p>}
           </label>
           {
            isSignup && (
              <label htmlFor='check'>
                <input type="checkbox" id='check' />
                <p style={{ fontSize:"13px"}}>
                  Opt-in to receive occascional,<br />product updates, user research invitation ,<br />company announcement,and digests
                </p>
              </label>
            )
           }
           <button type='submit' class='auth-btn'>{isSignup ? 'Sign up':'Login'}</button>
           {
            isSignup &&(
              <p style={{color:"#666767", fontSize:"13px"}}>
                By clicking"Sign up",you agree to our
                <span style={{color:"#007acb"}}> terms of<br /> service,</span>
                <span style={{color:"#007acb"}}>privacy policy</span> and 
                <span style={{color:"#007acb"}}>cookie policy service</span>
              </p>
            )
           }
         </form>
         <p>
         {isSignup ? 'already have an account?':"Don't have an account?"}
        <button type='button' class='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log in" :'sign up'}</button>
        </p>
          </div>
    </section>
  )
}

export default Auth