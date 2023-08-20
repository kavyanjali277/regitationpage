import React, { useState } from 'react';
import './login.css';
import { Link , useNavigate } from 'react-router-dom';
import axios from 'axios';
import Verification from './Signupverification';


function Signup() {
    const [values, setValue]= useState({
        name: '',
        email:'',
        passward:''
    });
    const navigate = useNavigate();
    const [errors,setErr]=useState({})
    const handelingInput=(event)=>{
        setValue(prev=> ({...prev,[event.target.name]: [event.target.value]}))
       }
   const eventHandeler=(event)=>{
       event.preventDefault();
       setErr(Verification(values));
       if(errors.name === "" && errors.email === "" && errors.passward === ""){
           axios.post('http://localhost:8081/signup', values)
           .then( response =>{
            navigate('/');
           })
           .catch(err => console.log(err));
       }
   }
  return (
    <div className="main_container">
      <div className="sub-container">   
        <form  action="" onSubmit={eventHandeler}>
            <h1 class="Main-heading">sign-in Page</h1>
          <div>
            <label htmlFor="name"className="heading">Name</label>
            <input type="text" placeholder="Enter your Name" name='name' className="form-control rounded-0" onChange={handelingInput}></input>
            {errors.name && <span className='text-danger'>{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="email"className="heading">Email</label>
            <input type="email" placeholder="Enter your Email id" name='email' className="form-control rounded-0" onChange={handelingInput}></input>
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="passward"className="heading">Passward</label>
            <input type="passward" placeholder="Enter your passward" name='passward' className="form-control rounded-0" onChange={handelingInput}></input>
            {errors.passward && <span className='text-danger'>{errors.passward}</span>}
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">signup</button>
          <Link to="/" className="btn btn-light w-100">login</Link>
          
        </form>
      </div>
    </div>
  );
}
export default Signup;
