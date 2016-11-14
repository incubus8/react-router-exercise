import React from 'react'
import { Link } from 'react-router' 

export default React.createClass({
  render() {
    return <div>
    	Halo ini saya
    	<Link to="/welcome">Ke welcome</Link>
    	</div>
  }
})
