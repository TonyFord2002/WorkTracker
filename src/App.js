import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Index from './components/Index'
import Add from './components/Add'
import Show from './components/Show'
import Edit from './components/Edit'
import EditWorker from './components/EditWorker'

function App() {
  return (
    <div className="App">
    <Router>
      <nav id ='nav'>
        <Link id='link' to = '/'>Home</Link><br/>
        <Link id='link' to = '/add'>Add A New Jobsite</Link>
      </nav>
      <Routes>
        <Route path = '/' element={<Index/>}></Route>
        <Route path = '/add' element={<Add/>}></Route>
        <Route path = '/:id' element={<Show/>}></Route>
        <Route path = '/:id/Edit' element={<Edit/>}></Route>
        <Route path = '/:id/EditWorker' element={<EditWorker/>}></Route>
      </Routes>
    </Router>
    </div>
  )
}

export default App;
