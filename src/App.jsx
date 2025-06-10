import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Create from './components/Create'
import Content from './Content';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/create' element={ <Create/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
