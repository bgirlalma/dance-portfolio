import {Routes, Route} from 'react-router-dom'
import { lazy } from 'react'

const Layout = lazy(() => import("./Layout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const VideoPage = lazy(() => import("./pages/VideoPage"));
const StudentsPage = lazy(() => import("./pages/StudentsPage"));

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
