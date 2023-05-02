import React from 'react'
import './Project.css'
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Project(props) {
  return (
  <div className='Main'>
    <ScreenHeading title={"Projects"} subHeading={"Take a look on my works"}/>
    <div className='Project-container' id={props.id || ""}>
    <div className='card-container'>
      <div className='image-container'>
        <img src='https://easebuzz.in/blog/wp-content/uploads/2020/12/8-copy.jpg' alt=''/>
      </div>
      <div className='card-content'>
         <div className='card-title'>
        <h4>Event Management System</h4>
       </div>
       <div className='card-body'>
        <p>This projects manages and podcast online as well as offline events from organisers to participants</p>
       </div>
      </div>
     
      <div className='probtn'>
        <button>
            <a href="https://github.com/Xrr-coderiko/with-tailwindcss.git">
                Know more
            </a>
        </button>
      </div>
    </div>
    <div className='card-container'>
      <div className='image-container'>
        <img src='https://www.thestatesman.com/wp-content/uploads/2020/11/iStock-ecomm.jpg' alt=''/>
      </div>
      <div className='card-content'>
         <div className='card-title'>
        <h4>E-commerce</h4>
       </div>
       <div className='card-body'>
        <p>This project is based on producting listing, selling and buying through over the internet and manages the sales from product to product</p>
       </div>
      </div>
     
      <div className='probtn'>
        <button>
            <a>
                Know more
            </a>
        </button>
      </div>
    </div>
    <div className='card-container'>
      <div className='image-container'>
        <img src='https://i.ytimg.com/vi/onSKOD3RPo8/maxresdefault.jpg' alt=''/>
      </div>
      <div className='card-content'>
         <div className='card-title'>
        <h4>Stock Market Tracker</h4>
       </div>
       <div className='card-body'>
        <p>Its an react js project which tracks the stock market and demonstrate live stock update with information and analysis</p>
       </div>
      </div>
     
      <div className='probtn'>
        <button>
            <a>
                Know more
            </a>
        </button>
      </div>
    </div>
   </div> 
  </div>  
   
    
  )
}

export default Project