import type React from "react"
import { useState } from "react"
import SessionModal from "./Modal" // <-- Adjust path if needed

export interface Session {
  id: number
  title: string
  host: string
  date: string
  time: string
  description: string
  avatar: string
}

const SessionsSection: React.FC = () => {
  const [selectedSession, setSelectedSession] = useState<Session | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleJoinSession = (session: Session) => {
    setSelectedSession(session)
    setIsModalOpen(true)
  }

  const sessions: Session[] = [
    {
      id: 1,
      title: "The Power of Starting Small",
      host: "Riya Bhat",
      date: "30th June 2025, Monday",
      time: "4:00 PM",
      description: "In this short yet impactful episode, host Riya explores how small habits can lead to big changes...",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      title: "TechTalk Today",
      host: "Arjun Das",
      date: "2nd July 2025, Wednesday",
      time: "6:00 PM",
      description: "In this episode, host Arjun dives into how artificial intelligence is shaping our daily routines...",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      title: "Startup Success Stories",
      host: "Sarah Chen",
      date: "5th July 2025, Saturday",
      time: "2:00 PM",
      description: "Join Sarah as she interviews successful entrepreneurs who built unicorn companies from scratch...",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Sessions
          </h2>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {sessions.map((session, index) => (
            <div
              key={session.id}
              className={`group relative ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex flex-col lg:flex items-center gap-8 lg:gap-12`}
            >
              <div className="flex-1 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-purple-200">
                <div className="p-8 lg:p-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={session.avatar}
                        alt={session.host}
                        className="w-16 h-16 rounded-full border-4 border-purple-100"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">{session.host}</h4>
                        <p className="text-purple-600 font-medium">Host</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full">
                        <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-purple-700 font-medium text-sm">{session.time}</span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">{session.date}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">
                      {session.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{session.description}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Live Session
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        {Math.floor(Math.random() * 500) + 100} attending
                      </span>
                    </div>
                    <button
                      onClick={() => handleJoinSession(session)}
                      className="bg-black text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
                    >
                      Join Session
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Visual Preview Block */ }
              {/* <div className="flex-shrink-0 lg:w-80">
                <div className="relative h-72 lg:h-80 bg-gradient-to-br from-purple-300 to-blue-300 rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold">Watch Preview</p>
                  </div>
                </div>
              </div> */}
            </div>
          ))}
        </div>

        {/* Modal Component Mount */ }
        <SessionModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          session={selectedSession}
        />

        {/* CTA Button */ }
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-10 py-4 rounded-xl text-lg font-medium hover:from-gray-800 hover:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View All Sessions
          </button>
        </div>
      </div>
    </section>
  )
}

export default SessionsSection
