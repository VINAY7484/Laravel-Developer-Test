import React from 'react'
import Navbar from './Navbar'
import { Head } from '@inertiajs/react'

const Layout = ({title, children}) => {
  return (
    <div>
        <Head>
            <title>{ title }</title>
        </Head>
        <Navbar/>
        {children}
    </div>
  )
}

export default Layout