"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Rocket, Menu, X, ChevronDown } from "lucide-react"
import AuthModals from "@/components/auth-modals"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const navigate = useNavigate()

  const navItems = [
    { label: "Share Needs", href: "/share-needs" },
    { label: "Explore", href: "/explore" },
    {
      label: "Online Sessions" , href: "/online-session", 
      children: [
           { label: "View Sessions", href: "/view-session" },
        { label: "Host Session", href: "https://kzmpnc6dd6vw4kwzwxoa.lite.vusercontent.net/" },
     
      ],
    },
    { label: "Get Funded", href: "/get-funded" },
  ]
const handleNavigation = (path: string) => {
  if (path.startsWith("http")) {
    window.location.href = path // external redirect
  } else {
    navigate(path) // internal routing
  }

  setIsMenuOpen(false)
  setIsDropdownOpen(false)
}

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Orion Eduverse
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
           {navItems.map((item) =>
  item.children ? (
    <div key={item.label} className="relative text-black font-semibold">
      <div className="flex items-center gap-1">
        <button
          onClick={() => handleNavigation(item.href)}
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
        >
          {item.label}
        </button>
        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <ChevronDown className="h-4 w-4 text-gray-700 hover:text-blue-600" />
        </button>
      </div>
      {isDropdownOpen && (
        <div className="absolute mt-2 bg-white shadow-lg rounded-md py-2 w-40 z-50 border">
          {item.children.map((subItem) => (
            <button
              key={subItem.href}
              onClick={() => handleNavigation(subItem.href)}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {subItem.label}
            </button>
          ))}
        </div>
      )}
    </div>
  ) : (
    <button
      key={item.href}
      onClick={() => handleNavigation(item.href)}
      className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
    >
      {item.label}
    </button>
  )
)}

            <div className="flex items-center space-x-4">
              <AuthModals />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="space-y-1">
                    <div className="font-medium text-gray-900">{item.label}</div>
                    <div className="pl-4 space-y-1">
                      {item.children.map((subItem) => (
                        <button
                          key={subItem.href}
                          onClick={() => handleNavigation(subItem.href)}
                          className="text-left m-2 font-semibold text-gray-700 hover:text-blue-600 text-sm"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                )
              )}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <AuthModals />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
