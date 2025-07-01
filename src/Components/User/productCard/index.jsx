import React from 'react'
import { FaStar } from "react-icons/fa";
function index() {
  return (
    <div className='card'>
      <div className="card-up">
        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="image" />
      </div>
      <div className="card-low">
        <h4>Fancy Product</h4>
        <p><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
        <p>$40.00 - $80.00</p>
        <button>Add to cart</button>
      </div>
    </div>
  )
}

export default index
