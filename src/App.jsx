import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements
} from 'react-router-dom'
import './App.css'

// Layouts
import RootLayout from './Layouts/RootLayout'

// Pages/Components
import Home from './pages/Home'
import Calendar from './pages/Calendar'
import Users from './pages/Users'
import Clubs from './components/Clubs'
import Lecturers from './components/Lecturers'
import UserProfile from './components/UserProfile'
import Assessment from './pages/Assessment'
import Help from './pages/Help'
import Settings from './pages/Settings'
import GettingStarted from './components/GettingStarted'
import FAQs from './components/FAQs'
import Resources from './components/Resources'
import ContactSupport from './components/ContactSupport'
import { ThemeContext } from './Contexts/ThemeContext'
import { useState } from 'react'
import GradeAnalytics from './pages/GradeAnalytics'
import LoggedOut from './pages/LoggedOut'


function App() {

  const [darkModeValue, setDarkModeValue] = useState(false);
  const [user, setUser] = useState(null);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path='grade-analytics' element={<GradeAnalytics />}/>
        <Route path='calendar' element={<Calendar />}/>
        <Route path='users' element={<Users />}>
          <Route index element={<UserProfile />}/>
          <Route path='clubs' element={<Clubs />}/>
          <Route path='lecturers' element={<Lecturers />} />
        </Route>
        <Route path='assessment' element={<Assessment />}/>
        <Route path='help' element={<Help />}>
          <Route index element={<GettingStarted />}/>
          <Route path='faqs' element={<FAQs />}/>
          <Route path='resources' element={<Resources />}/>
          <Route path='contact-support' element={<ContactSupport />}/>
        </Route>
        <Route path='settings' element={<Settings />}/>
        <Route path='logged-out' element={<LoggedOut />}/>
      </Route>
    )
  )

  return (
    <div className='dark:bg-dark-mode-color h-full'>
      <ThemeContext.Provider value={{darkModeValue, setDarkModeValue, user, setUser}}>
        <RouterProvider router={router}/>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
