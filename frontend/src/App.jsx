import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Body from './component/Body'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body/>}>
        
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App