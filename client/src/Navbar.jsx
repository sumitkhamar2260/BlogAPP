import React, { useContext } from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from './App'
import axios from 'axios'

function Navbar() {
    const user = useContext(userContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        axios.get('https://blog-app-api-two.vercel.app/logout')
        .then(res => {
            if(res.data === "Success")
            navigate(0)
        }).catch(err => console.log(err))
    }
    
  return (
    <div className='navbar-header'>
        
        <div><h3>Blog App</h3></div>
        <div>
            <Link to="/" className='link'>Home</Link>
            {
                user.username ?
                    <Link to="/create" className='link'>Create</Link>
                : <></>
            }
            <Link to="/contact" className='link'>Contact</Link>
        </div>
        {
            user.username ?
            <div className='main'>
                <h6 >Hi {user.username}</h6>
                <input type="button" onClick={handleLogout} value="Logout" className='btn_input'/>
            </div>
            :
            <div><Link to="/register" className="link">Register/Login</Link></div>
    
        }
    </div>
  )
}

export default Navbar