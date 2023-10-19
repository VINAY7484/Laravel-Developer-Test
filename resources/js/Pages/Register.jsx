import React from 'react'
import Layout from '../Shared/Layout'
// import { useForm, usePage } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'
import { useForm } from 'laravel-precognition-react';


function Register() {
  const pageData = usePage().props;
  console.log(pageData);
  const { data, setData, post, processing, errors,validate } = useForm({
    name: "",
    email: "",
    password: "",
    password_confermation: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    post("/register")
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <lable htmlFor="name">
          Name
          <input name='name' id='name' placeholder='Enter Name'
          type='name'
            onChange={e => setData("name", e.target.value)}
          />
        </lable>
        {errors.name ? <div>{errors.name}</div> : ""}
        <lable htmlFor="email">
          Email
          <input name='email' id='email' placeholder='Enter Email'
          type='email'
            onChange={e => setData("email", e.target.value)}
            onBlur={()=>validate("email")}
          />
        </lable>
        {errors.email ? <div>{errors.email}</div> : ""}
        <label htmlFor="password">
          Password
          <input name='password' id='password' placeholder='Enter Password'
          type='password'
            onChange={e => setData("password", e.target.value)}
          />
        </label>
        {errors.message ? <div>{errors.message}</div> : ""}
        <label htmlFor="password_confermation">
          Password_confermation
          <input name='password_confermation' id='password_confermation' placeholder='Enter Password_confermation'
          type='password_confermation'
            onChange={e => setData("password_confermation", e.target.value)}
          />
        </label>
        {errors.message ? <div>{errors.message}</div> : ""}
        <button type='submit'>Register</button>
      </form>
      {pageData.flash.message ? 
    <div className={'alert '+pageData.flash.type}>{pageData.flash.message} </div> : ""  
    }
    </div>
  )
}

export default Register
Register.layout = page => <Layout title="Register Page" children={page} />