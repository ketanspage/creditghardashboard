import {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import Login from '../features/user/Login'

function ExternalPage(){


    return(
        <div className="">
                <Login />
                <Link to="/app/dashboard">
            <button className="btn bg-base-100 btn-outline">Get Started</button>
          </Link>
        </div>
    )
}

export default ExternalPage