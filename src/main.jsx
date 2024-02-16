import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Homepage from './pages/homePage'
import NotFound from './pages/notFound'

ReactDOM.createRoot(document.getElementById('root')).render(
<Router>
  <Routes>
    <Route>
    <Route path='/' element={<Homepage/>}></Route>
    </Route>
    <Route path='*' element={<NotFound/>}></Route>
  </Routes>
</Router>
)
