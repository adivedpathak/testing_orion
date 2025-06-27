// src/App.tsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Prelogin from './pages/prelogin'
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

        {/* Prelogin flow */}
        <Route path="/prelogin" element={<Prelogin />} />

        {/* Example additional routes */}
        {/*
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        */}

        {/* Catch-all 404 */}
        <Route path="*" element={<h1 className="text-center mt-20 text-2xl">404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App
