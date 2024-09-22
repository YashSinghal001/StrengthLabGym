import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function BackImg() {
  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate('/', { state: { WhoAreWe: 'Strength Lab' } });
  };
  return (
    <div>
<div className="backimgabout">
<div className="bannerclass">
    <h1>Classes</h1>

    <nav style={{ "--bs-breadcrumb-divider": ">",color:"white" }} aria-label="breadcrumb" className='breadssclass text-white' >
  <ol className="breadcrumb">  {/* Changed 'class' to 'className' */}
    <li className=" breadcrumb-item "><a href="#" onClick={handleJoinNow} className='text-white strenght'>Strength Lab -</a></li>
    <li className="breadcrumb-item active fw-normal " aria-current="page " style={{color:"#ff0606"}}>Classes</li>
  </ol>
</nav>

</div>

</div>
        
      
    </div>
  )
}
