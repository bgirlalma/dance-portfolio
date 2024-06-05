import {Routes, Route} from 'react-router-dom'
import { lazy } from 'react'
import VideoPage from './pages/VideoPages';

const Layout = lazy(() => import("./Layout"));
const HomePage = lazy(() => import("./pages/HomePages"));

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/video' element={<VideoPage />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
