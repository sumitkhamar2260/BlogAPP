import React, { useContext } from 'react'
import { userContext } from './App'
import { Link } from 'react-router-dom'
function Contact() {
    const user = useContext(userContext)
  return (
    <div className='contact'>
        {
            user.username ?
            <div>
                <h4>Reach out the author @</h4>
                <hr></hr>
                <div className='container mx-3 my-3'>
                <i className="fa">&#xf0e0; {user.email}</i>
                </div>
            </div>
            :
            <div>
                 <div>
                 <h5>Oops! User not logged In. Please login to create a post</h5>
                     <div><h5><Link to="/register" className="link">Register/Login</Link></h5></div>
                   </div>
    
            </div>
           
        }
        <div>
        <div>
                <h4>Contact dev team @</h4>
                <hr></hr>
                
                <div className='container mx-3 my-3'>
                <i className="fa">&#xf095; +91 7905114807</i>
                <i className="fa">&#xf0e0; ersatyam5548@gmail.com</i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact