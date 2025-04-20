import './App.css'
import TaskTracker from './pages/TaskTracker'

function App() {

  return (
    <div className='h-screen flex items-start py-10 justify-center bg-violet-100'>
      <TaskTracker />
      <button >Dark Mode</button>
    </div>
  )
}

export default App
