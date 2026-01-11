import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'
import Navbar from './Navbar'

const router = createBrowserRouter([
  { 
    path: '/',
     element: <div>
      <Navbar/>
<Home /> 
     </div>
    },
  { 
    path: '/paste',
     element: <div>
      <Navbar/>
      <Paste /> 
     </div>
    },
  {
     path: '/paste/:id',
      element: <div> <Navbar/> <ViewPaste /></div>
     }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
