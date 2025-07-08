// src/App.tsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Prelogin from './pages/prelogin'
// import SessionPlatform from './components/host-session-page'
import OnlineSessionPage from './pages/onlinesession'
import PostLoginPage from './pages/postlogin'
import ViewSession from './pages/ViewSession'
import HostSessionForms from './pages/HostSession'
import { Rocket } from 'lucide-react'
import StartupListing from './pages/Explore'
/* import other pages as you build them
import Login from '@/pages/login'
import Dashboard from '@/pages/dashboard'
*/

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root to /prelogin (or just render at "/") */}
        <Route path="/" element={<Navigate to="/prelogin" replace />} />

      
        <Route path="/prelogin" element={<Prelogin />} />
        <Route path= "/post-login" element = {<PostLoginPage /> } /> 
        <Route path= "/online-session" element = {<OnlineSessionPage /> } />
        <Route path = "/view-session" element = {<ViewSession /> } />
        <Route path="/host-session" element={<HostSessionForms />} />
      <Route path = "/get-funded" element ={<Navigate to="*" replace />} />
      <Route path = "explore" element ={ <StartupListing />} />
 
        {/* Example additional routes */}
        {/*
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        */}

        {/* Catch-all 404 */}

   
<Route
  path="*"
  element={
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-full mb-4 shadow-lg animate-bounce">
        <Rocket className="h-10 w-10 text-white" />
      </div>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
        Coming Soon
      </h1>
      <p className="text-lg text-black">We're working on something awesome. Stay tuned 🚀</p>
    </div>
  }
/>

     </Routes>
    </Router>
  )
}

export default App
