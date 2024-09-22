import React from 'react'
// import { Link } from 'react-router-dom'
import './Class.css'

export default function MenuClass() {
  return (
    <div>
      
      <ul className="nav justify-content-center mt-5 pt-5">
  <li className="nav-item">
   <a className="nav-link active Clssmenu classesbtn" aria-current="page" href="#">All Classes</a>
  </li>
  <li className="nav-item">
   <a className="nav-link Clssmenu classesbtn" href="#">Cardio</a>
  </li>
  <li className="nav-item">
   <a className="nav-link Clssmenu classesbtn" href="#">Dance</a>
  </li>
  <li className="nav-item">
   <a className="nav-link Clssmenu classesbtn" href="#">Mind & Body</a>
  </li>
  <li className="nav-item">
   <a className="nav-link Clssmenu classesbtn" href="#">Recovery</a>
  </li>
</ul>


    </div>
  )
}
