import React from 'react'
import { Routes,Route,} from 'react-router-dom'
import Cuisine from './Cuisine'
import Home from './Home'
import Recipe from './Recipe'
import Search from './Search'



function Pages  () {
  return (
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/cuisine/:type" element={<Cuisine/>}/>
      <Route path="/cuisine/" element={<Cuisine/>}/>
      <Route path="/search/:search" element={<Search/>}/>
      <Route path='/recipe/:name'element={<Recipe/>}/>
    </Routes>
  

  )
}

export default Pages