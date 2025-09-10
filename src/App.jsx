import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Dashboard from './Componenet/Dashboard'

function App() {
  

  return (
  < Router>
  <Routes>
    <Route path='/' element={<Dashboard/>}/>
  </Routes>
  </Router>
  )
}

export default App
