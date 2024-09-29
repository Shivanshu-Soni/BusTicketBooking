import React from 'react'
import { useNavigate } from 'react-router'
import Dropdown from 'react-bootstrap/Dropdown';

export default function Navbar({ loggedin }) {
    let navigate = useNavigate()
    
    const clickHomepage = (e) => {
        navigate("/")
    }

    return (
        <>
        <div className="navbar" >
            <h2 className="logo" onClick={(e) => { clickHomepage(e) }}><span>RED</span>BUS</h2>

            {loggedin === false ? <a className="btn" style={{ color: "black" }} href="/login">User Login!</a>

                : <a className="btn" href="/logout">Logout!</a>}

            {loggedin === false ? <a className="btn" href="/signup">SignUp!</a> : <a className="btn" href="/findbuses">Book tickets!</a>}

            {loggedin===true ? <a className="btn" href="/cancelt">Cancel Tickets!</a>:" " }
            {loggedin===true ? <a className="btn" href="/mybookings">My Bookings</a>:" " }

           
            <a className="btn" href="/contactus">Contact US!</a>
            <a className="btn" href="/aboutus">About US!</a>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="drop">
                    <img className="iconn" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="user"></img>
                </Dropdown.Toggle>
                <Dropdown.Menu>
        {loggedin ? (
          <>
            <Dropdown.Item href="/getuserdetails">Profile!</Dropdown.Item>
            <Dropdown.Item href="/mybookings">My Bookings!</Dropdown.Item>
            <Dropdown.Item href="/logout">Logout!</Dropdown.Item>
          </>
        ) : (
          <>
          <Dropdown.Item href="/login">Login!</Dropdown.Item>
          <Dropdown.Item  href="/adminlogin">Admin Login!</Dropdown.Item></>
          
        )}
      </Dropdown.Menu>
            </Dropdown>
        </div >   
        </>
    )
}