import React from 'react'
import Layout from '../Shared/Layout'

function Welcome() {
  return (
    <div>
      welcomme
    </div>
  )
}

export default Welcome
Welcome.layout = page => <Layout title="Welcome page" children={page}/>
