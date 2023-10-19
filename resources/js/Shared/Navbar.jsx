import { Link, usePage } from '@inertiajs/react'
import React from 'react'

const Navbar = () => {
   const data = usePage().props
   console.log(data)
  return (
    <>
    <div className='navbar'>
    <div>
        <Link href={route("home")}>Home</Link>
        {/* <Link href={route("about")}>About</Link> */}
        {/* <Link href={route("login")}>Login</Link> */}
        <Link href={route("bussinessdetails")}>BussinessDetails</Link>
        <Link href={route("addbussiness")}>AddBussiness</Link>
    </div>
    <div>
        {data.auth?
        <>
        <Link href='/profile'>Welcom, {data.auth.name}</Link>
        <Link href="/logout">Logout</Link>
        </>
        :
        <>
        <Link href='/login'>Login</Link>
        <Link href="/register">Register</Link>
        </>
        }
    </div>
    </div>
    </>
  )
}

export default Navbar