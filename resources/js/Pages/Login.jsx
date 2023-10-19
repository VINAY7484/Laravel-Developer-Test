import React from 'react'
import Layout from '../Shared/Layout'
import { useForm, usePage } from '@inertiajs/react'


function Login() {
  const pageData = usePage().props;
  console.log(pageData);
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    post("/login")
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <lable htmlFor="email">
          Email
          <input name='email' id='email' placeholder='Enter Email'
          type='email'
            onChange={e => setData("email", e.target.value)}
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
        {errors.password ? <div>{errors.password}</div> : ""}
        <button type='submit'>Login</button>
      </form>
      {pageData.flash.message ? 
    <div className={'alert '+pageData.flash.type}>{pageData.flash.message} </div> : ""  
    }
    </div>
  )
}

export default Login
Login.layout = page => <Layout title="Login Page" children={page} />