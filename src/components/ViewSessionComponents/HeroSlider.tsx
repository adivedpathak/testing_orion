"use client"

import type React from "react"
import { useState, useEffect } from "react"

export interface Session {
  id: number
  title: string
  host: string
  date: string
  time: string
  description: string
  avatar: string
}

export interface SlideData {
  id: number
  image: string
  alt: string
}


const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides: SlideData[] = [
    {
      id: 1,
      image: "https://imgs.search.brave.com/DyrHY-dkabvh3FtM0jWKzppDk-T-aGikJEBIUIvT9GM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9lbnRyZXBy/ZW5ldXItbmV4dC10/YWJsZXQtYm90aC1m/YWNpbmctMjYwbnct/MjU4NTcxNDE1OS5q/cGc?height=500&width=400",
      alt: "Tech entrepreneur presenting",
    },
    {
      id: 2,
      image: "https://imgs.search.brave.com/QsMNaBmmO1fTpu8XTFFnAoyOqjDME5Hg97QY2CeU-f8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ4LzYyLzk2/LzM2MF9GXzE0ODYy/OTYzM195MERLdDgy/Uzc1aU1iR0RoVWls/MFdxbWdjNVlvMndi/ci5qcGc?height=500&width=400",
      alt: "Business meeting discussion",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=500&width=400",
      alt: "Startup team collaboration",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=500&width=400",
      alt: "Innovation workshop",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3500)

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        {/* <div className="text-center mb-8">
          <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-blue-100 text-blue-800 shadow-sm">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
            From Pre-Seed to Post-IPO
          </span>
        </div> */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
      Welcome to World's Largest Platform For Startups
              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {" "}
                For Startups
              </span> */}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
            Welcome to the  World of Tech !!!
            </p>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get Started in Minutes</h3>
              <button className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-10 py-4 rounded-xl text-lg font-medium hover:from-gray-800 hover:to-gray-600 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Register Now
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Slider */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full h-[600px] flex items-center justify-center">
              {/* Slider Container */}
              <div className="relative w-80 h-96">
                {slides.map((slide, index) => {
                  const position = (index - currentSlide + slides.length) % slides.length

                  return (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                        position === 0
                          ? "z-30 scale-110 translate-x-0 opacity-100"
                          : position === 1
                            ? "z-20 scale-95 translate-x-8 opacity-80"
                            : position === slides.length - 1
                              ? "z-20 scale-95 -translate-x-8 opacity-80"
                              : "z-10 scale-75 opacity-40"
                      }`}
                      style={{
                        transform: `
                          translateX(${
                            position === 0
                              ? 0
                              : position === 1
                                ? 40
                                : position === slides.length - 1
                                  ? -40
                                  : position < slides.length / 2
                                    ? 80
                                    : -80
                          }px) 
                          scale(${
                            position === 0 ? 1.1 : position === 1 || position === slides.length - 1 ? 0.95 : 0.75
                          })
                        `,
                        zIndex: position === 0 ? 30 : position === 1 || position === slides.length - 1 ? 20 : 10,
                        opacity: position === 0 ? 1 : position === 1 || position === slides.length - 1 ? 0.8 : 0.4,
                      }}
                    >
                      <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                        <img
                          src={slide.image || "/placeholder.svg"}
                          alt={slide.alt}
                          className="w-full h-full object-cover"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentSlide
                      ? "w-8 h-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                      : "w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSlider
