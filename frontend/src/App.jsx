import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Body from './component/Body'
import HeroSection from './component/HeroSection'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body/>}>
          <Route path="/" element={<HeroSection/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App