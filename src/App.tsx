import {Routes, Route} from 'react-router-dom'
import { lazy } from 'react'
import HomePage from './pages/HomePage';
import VideoPage from './pages/VideoPage';
import StudentsPage from './pages/StudentsPage';

const Layout = lazy(() => import("./Layout"));


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/video' element={<VideoPage />} />
          <Route path='/students' element={<StudentsPage />} >
          </Route>
        </Route>
      </Routes>

    </div>
  )
}

export default App
