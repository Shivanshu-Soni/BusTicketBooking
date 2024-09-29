import React from 'react'
import './styles.css'
function Header({ loggedin }) {
  return (
    <>
    {/* <div className="header1">
      <div className="main">
        <div className="textbody">
          <h1><span>Welcome to RED</span>BUS<span>!</span></h1>
          <p>Explore Maharashtra with us!</p>
          <div className="options">
            {loggedin === true ? <a href="/findbuses" className="btn1">Book Tickets!</a> : <a href="/login" className="btn1">Book Tickets!</a>}
            
          </div>
        </div>
       
      </div>
    </div> */}
   
          </>
  )
}

export default Header
