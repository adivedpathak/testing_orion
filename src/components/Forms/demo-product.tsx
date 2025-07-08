"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface DemoFormProps {
  formData: any
  onInputChange: (field: string, value: string) => void
}

export default function DemoForm({ formData, onInputChange }: DemoFormProps) {
  return (
    <div className="space-y-6">
      {/* Title/Topic */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <Label className="text-gray-800 font-medium text-base w-full sm:w-32 flex-shrink-0">Title/Topic</Label>
        <Input
          value={formData.title}
          onChange={(e) => onInputChange("title", e.target.value)}
          className="bg-gray-50 border border-gray-200 rounded-lg h-12 flex-1 focus:bg-white"
          placeholder=""
        />
      </div>

      {/* Date/time */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <Label className="text-gray-800 font-medium text-base w-full sm:w-32 flex-shrink-0">Date/time</Label>
        <Input
          value={formData.dateTime}
          onChange={(e) => onInputChange("dateTime", e.target.value)}
          className="bg-gray-50 border border-gray-200 rounded-lg h-12 flex-1 focus:bg-white"
          placeholder=""
        />
      </div>

      {/* Demo Type */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
        <Label className="text-gray-800 font-medium text-base w-full sm:w-32 flex-shrink-0 pt-2">Demo Type</Label>
        <RadioGroup
          value={formData.demoType}
          onValueChange={(value) => onInputChange("demoType", value)}
          className="flex-1"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
              <RadioGroupItem value="product" id="product" />
              <Label htmlFor="product" className="text-sm cursor-pointer">
                Product Demo
              </Label>
            </div>
            <div className="flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
              <RadioGroupItem value="solution" id="solution" />
              <Label htmlFor="solution" className="text-sm cursor-pointer">
                Solution Demo
              </Label>
            </div>
            <div className="flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
              <RadioGroupItem value="prototype" id="prototype" />
              <Label htmlFor="prototype" className="text-sm cursor-pointer">
                Prototype Demo
              </Label>
            </div>
            <div className="flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
              <RadioGroupItem value="beta" id="beta" />
              <Label htmlFor="beta" className="text-sm cursor-pointer">
                Beta Version
              </Label>
            </div>
          </div>
        </RadioGroup>
      </div>

      {/* Presenter's Information Section */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4">
        <h3 className="text-gray-800 font-semibold text-lg">Presenter's Information</h3>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <Label className="text-gray-700 font-medium text-base w-full sm:w-24 flex-shrink-0">Name</Label>
          <Input
            value={formData.presenterName}
            onChange={(e) => onInputChange("presenterName", e.target.value)}
            className="bg-white border border-gray-200 rounded-lg h-12 flex-1"
            placeholder=""
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
          <Label className="text-gray-700 font-medium text-base w-full sm:w-24 flex-shrink-0 pt-2">Introduction</Label>
          <Textarea
            value={formData.presenterIntroduction}
            onChange={(e) => onInputChange("presenterIntroduction", e.target.value)}
            className="bg-white border border-gray-200 rounded-lg min-h-[100px] resize-none flex-1"
            placeholder=""
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <Label className="text-gray-700 font-medium text-base w-full sm:w-24 flex-shrink-0">Designation</Label>
          <Input
            value={formData.presenterDesignation}
            onChange={(e) => onInputChange("presenterDesignation", e.target.value)}
            className="bg-white border border-gray-200 rounded-lg h-12 flex-1"
            placeholder=""
          />
        </div>
      </div>

      {/* Key Features */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
        <Label className="text-gray-800 font-medium text-base w-full sm:w-32 flex-shrink-0 pt-2">Key Features</Label>
        <Textarea
          value={formData.keyFeatures}
          onChange={(e) => onInputChange("keyFeatures", e.target.value)}
          className="bg-gray-50 border border-gray-200 rounded-lg min-h-[120px] resize-none flex-1 focus:bg-white"
          placeholder=""
        />
      </div>

      {/* About the Company */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
        <Label className="text-gray-800 font-medium text-base w-full sm:w-32 flex-shrink-0 pt-2">
          About the Company
        </Label>
        <Textarea
          value={formData.aboutCompany}
          onChange={(e) => onInputChange("aboutCompany", e.target.value)}
          className="bg-gray-50 border border-gray-200 rounded-lg min-h-[120px] resize-none flex-1 focus:bg-white"
          placeholder=""
        />
      </div>

      {/* About the Solution/Product */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
        <Label className="text-gray-800 font-medium text-base w-full sm:w-32 flex-shrink-0 pt-2">
          About the Solution/Product
        </Label>
        <Textarea
          value={formData.aboutSolution}
          onChange={(e) => onInputChange("aboutSolution", e.target.value)}
          className="bg-gray-50 border border-gray-200 rounded-lg min-h-[120px] resize-none flex-1 focus:bg-white"
          placeholder=""
        />
      </div>

      {/* Registration link */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <Label className="text-gray-800 font-medium text-base w-full sm:w-32 flex-shrink-0">Registration link</Label>
        <Input
          type="url"
          value={formData.registrationLink}
          onChange={(e) => onInputChange("registrationLink", e.target.value)}
          className="bg-gray-50 border border-gray-200 rounded-lg h-12 flex-1 focus:bg-white"
          placeholder=""
        />
      </div>
    </div>
  )
}
