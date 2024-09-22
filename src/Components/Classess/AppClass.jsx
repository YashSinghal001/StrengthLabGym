import React from 'react'
import './Class.css'
import MenuClass from './MenuClass'
import BackImg from './BackImg'
import AllClass from './AllClass'
import All2Classes from './All2Classes'
import { Card } from 'react-bootstrap'
import Cardio from './Cardio'
import Dance from './Dance'
import Mind from './Mind'
import Recovery from './Recovery'
import FitnessClassSchedule from './FitnessClassSchedule'
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

export default function AppClass() {
  return (
    <div>
      


      {/* <Router>
<MenuClass/>
<Routes>

</Routes>

</Router> */}
<BackImg/>
<FitnessClassSchedule/>
{/* <MenuClass/> */}
{/* <AllClass/> */}
{/* part 2 classes */}
{/* <All2Classes/> */}
{/* Cardio */}
{/* <Cardio/> */}
{/* Dance */}
{/* <Dance/> */}
{/* Yoga */}
{/* <Mind/> */}
{/* Recovery */}
{/* <Recovery/> */}


    </div>
  )
}
