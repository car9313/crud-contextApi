import { Route, Routes } from 'react-router-dom'
import './App.css'
import Heading from './components/Heading'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { GlobalProvider } from './context/GobalContext'


function App() {
  return (
    <div className='window'>
      <div className='container'>

        <Heading />
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/add' element={<TaskForm />} />
          <Route path='/edit/:id' element={<TaskForm />} />
        </Routes>


      </div>

    </div>)
}
export default App
