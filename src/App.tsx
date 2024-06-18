import {Routes, Route} from 'react-router-dom'
import { lazy } from 'react'
import VideoPage from './pages/VideoPage';
import StudentsPage from './pages/StudentsPage';

const Layout = lazy(() => import("./Layout"));
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/video' element={<VideoPage />} />
          <Route path='/students' element={<StudentsPage />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
