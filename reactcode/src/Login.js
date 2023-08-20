import React, { useState} from 'react'
import { Link , useNavigate  } from 'react-router-dom';
import './login.css';
import Verification from './Loginverification';
import axios from 'axios'

function Login() {
   const [values, setValue]=useState({
        email:'',
        passward:''
    });
    const navigate = useNavigate();
    const [errors,setErr]=useState({})
    const handelingInput=(event)=>{
        setValue(prev=> ({...prev,[event.target.name]: [event.target.value]}))
       }
   const eventHandele=(event)=>{
       event.preventDefault()
       setErr(Verification(values))
       if(errors.email === "" && errors.passward === ""){
        axios.post('http://localhost:8081/login',values)
        .then(response=>{
            if(response.data === "Success"){
               navigate('/home');
            }else{
                alert("no user exit")
            }
        })

        .catch(err => console.log(err));
    }
   }
   return (
    <div className="main_container">
      <div className="sub-container">   
        <form  action="" onSubmit={eventHandele}>
            <h1 class="Main-heading">Log-in Page</h1>
          
          <div>
            <label htmlFor="email"className="heading">Email</label>
            <input type="email" placeholder="Enter your Email id" name="email" className="form-control rounded-0" onChange={handelingInput}></input>
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="passward"className="heading">Passward</label>
            <input type="passward" placeholder="Enter your passward" name="passward" className="form-control rounded-0" onChange={handelingInput}></input>
            {errors.passward && <span className='text-danger'>{errors.passward}</span>}
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">Log in</button>
          <p>if your a new user click on new user</p>
          <Link to="/signup" className="btn btn-light w-100">new user</Link>
          
        </form>
      </div>
    </div>
  );
}

export default Login;
