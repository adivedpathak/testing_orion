"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"
import WebinarForm from "./webinar"
import PanelDiscussionForm from "./panel-discussion"
import DemoForm from "./demo-product"

type FormType = "webinar" | "panel" | "demo"

export default function SessionForms() {
  const [activeForm, setActiveForm] = useState<FormType>("webinar")
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    // Webinar fields
    title: "",
    dateTime: "",
    duration: "",
    audienceIntended: "",
    description: "",
    speakerName: "",
    speakerEmail: "",
    contact: "",
    registrationLink: "",
    // Panel Discussion fields
    topic: "",
    topicDescription: "",
    sessionFormat: "",
    panelistName: "",
    panelistBio: "",
    panelistDesignation: "",
    moderatorName: "",
    moderatorBio: "",
    moderatorDesignation: "",
    // Demo fields
    demoType: "",
    keyFeatures: "",
    presenterName: "",
    presenterIntroduction: "",
    presenterDesignation: "",
    aboutCompany: "",
    aboutSolution: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const resetForm = () => {
    setFormData({
      title: "",
      dateTime: "",
      duration: "",
      audienceIntended: "",
      description: "",
      speakerName: "",
      speakerEmail: "",
      contact: "",
      registrationLink: "",
      topic: "",
      topicDescription: "",
      sessionFormat: "",
      panelistName: "",
      panelistBio: "",
      panelistDesignation: "",
      moderatorName: "",
      moderatorBio: "",
      moderatorDesignation: "",
      demoType: "",
      keyFeatures: "",
      presenterName: "",
      presenterIntroduction: "",
      presenterDesignation: "",
      aboutCompany: "",
      aboutSolution: "",
    })
    setShowSuccess(false)
  }

  const handleFormTypeChange = (type: FormType) => {
    setActiveForm(type)
    resetForm()
  }

  // const getFormTitle = () => {
  //   switch (activeForm) {
  //     case "webinar":
  //       return "Webinar Session"
  //     case "panel":
  //       return "Panel Discussion/Podcast"
  //     case "demo":
  //       return "Demo of Product/Solution"
  //     default:
  //       return "Webinar Session"
  //   }
  // }

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header with Purple Gradient */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-t-2xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-white text-xl  sm:text-xl font-bold"> Share Your Needs</h1>
          <button className="text-white hover:text-gray-200 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-gray-50 border-l border-r border-gray-200">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => handleFormTypeChange("webinar")}
              className={`flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeForm === "webinar"
                  ? "text-blue-600 border-blue-600 bg-white"
                  : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Webinar
            </button>
            <button
              onClick={() => handleFormTypeChange("panel")}
              className={`flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeForm === "panel"
                  ? "text-blue-600 border-blue-600 bg-white"
                  : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Panel Discussion/Podcast
            </button>
            <button
              onClick={() => handleFormTypeChange("demo")}
              className={`flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeForm === "demo"
                  ? "text-blue-600 border-blue-600 bg-white"
                  : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Demo of Product/Solution
            </button>
          </div>
        </div>

        {/* Form Container */}
        <Card className="bg-white border border-gray-200 rounded-t-none rounded-b-2xl shadow-lg">
          <CardContent className="p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit}>
              <div className="transition-all duration-300 ease-in-out">
                {activeForm === "webinar" && <WebinarForm formData={formData} onInputChange={handleInputChange} />}
                {activeForm === "panel" && (
                  <PanelDiscussionForm formData={formData} onInputChange={handleInputChange} />
                )}
                {activeForm === "demo" && <DemoForm formData={formData} onInputChange={handleInputChange} />}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <Button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-3 rounded-xl font-semibold text-base shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            Submit
          </Button>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-2xl p-6 border border-gray-200 transition-all duration-300 animate-in slide-in-from-bottom-4 z-50">
            <p className="text-gray-800 font-semibold text-lg">Success! Your Post is now live.</p>
          </div>
        )}
      </div>
    </div>
  )
}
