"use client"

import type React from "react"
import { useState } from "react"
import { X, Calendar, Clock, Users, User, Mail, Phone, Link, CheckCircle } from "lucide-react"

interface SessionModalProps {
  open: boolean
  onClose: () => void
  session: {
    title: string
    date: string
    time: string
    description: string
    avatar: string
    host: string
  } | null
}

const SessionModal: React.FC<SessionModalProps> = ({ open, onClose, session }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  if (!open || !session) return null

  const handleJoinSession = () => {
    setShowSuccessModal(true)
  }

  const handleCloseSuccess = () => {
    setShowSuccessModal(false)
    onClose()
  }

  return (
    <>
      {/* Main Session Modal */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center ">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl relative overflow-hidden max-h-[95vh] flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 md:p-8 text-white relative">
            <button
              onClick={onClose}
              className="absolute  right-4 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{session.title}</h2>
                <div className="flex items-center gap-4 text-white/90">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{session.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{session.time}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    Session Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Title/Topic</label>
                      <div className="bg-white rounded-xl p-3 border border-gray-200 text-gray-900">
                        {session.title}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date & Time</label>
                      <div className="bg-white rounded-xl p-3 border border-gray-200 text-gray-900">
                        {session.date} | {session.time}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                      <div className="bg-white rounded-xl p-3 border border-gray-200 text-gray-900">1 hour</div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Audience Intended</label>
                      <div className="flex gap-2">
                        <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          Founders
                        </div>
                        <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          Students
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Description</h3>
                  <div className="bg-white rounded-xl p-4 border border-gray-200 text-gray-700 leading-relaxed">
                    {session.description}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-purple-600" />
                    Speaker Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Speaker's Name</label>
                      <div className="bg-white rounded-xl p-3 border border-gray-200 text-gray-900">{session.host}</div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Speaker's Email</label>
                      <div className="bg-white rounded-xl p-3 border border-gray-200 text-gray-900 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-500" />
                        host@email.com
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact</label>
                      <div className="bg-white rounded-xl p-3 border border-gray-200 text-gray-900 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-500" />
                        +91 9876543210
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Registration Link</label>
                      <div className="bg-white rounded-xl p-3 border border-gray-200 text-gray-900 flex items-center gap-2">
                        <Link className="w-4 h-4 text-gray-500" />
                        <span className="text-blue-600 hover:underline cursor-pointer">https://join.session/xyz</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Join Session Button */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">Ready to Join?</h3>
                  <p className="text-white/90 mb-4 text-sm">
                    Register now to secure your spot in this exclusive session.
                  </p>
                  <button
                    onClick={handleJoinSession}
                    className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Users className="w-5 h-5" />
                    Join Session
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 text-center relative">
            <button onClick={handleCloseSuccess} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X className="w-6 h-6" />
            </button>

            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Successfully Registered!</h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              You have been successfully registered for <strong>{session.title}</strong>. A confirmation email has been
              sent to your registered email address.
            </p>

            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Session Date:</span>
                <span className="font-medium text-gray-900">{session.date}</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-gray-600">Session Time:</span>
                <span className="font-medium text-gray-900">{session.time}</span>
              </div>
            </div>

            <button
              onClick={handleCloseSuccess}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Got it, Thanks!
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default SessionModal
