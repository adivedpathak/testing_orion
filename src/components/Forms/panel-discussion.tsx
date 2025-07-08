"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface PanelDiscussionFormProps {
  formData: any
  onInputChange: (field: string, value: string) => void
}

export default function PanelDiscussionForm({ formData, onInputChange }: PanelDiscussionFormProps) {
  return (
    <div className="space-y-6">
      {/* Topic */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <Label className="text-gray-800 font-medium text-base w-full sm:w-32 flex-shrink-0">Topic</Label>
        <Input
          value={formData.topic}
          onChange={(e) => onInputChange("topic", e.target.value)}
          className="bg-gray-50 border border-gray-200 rounded-lg h-12 flex-1 focus:bg-white"
          placeholder=""
        />
      </div>

      {/* Topic Description */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
        <Label className="text-gray-800 font-medium text-base w-full sm:w-32 flex-shrink-0 pt-2">
          Topic Description
        </Label>
        <Textarea
          value={formData.topicDescription}
          onChange={(e) => onInputChange("topicDescription", e.target.value)}
          className="bg-gray-50 border border-gray-200 rounded-lg min-h-[100px] resize-none flex-1 focus:bg-white"
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

      {/* Session Format */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
        <Label className="text-gray-800 font-medium text-base w-full sm:w-32 flex-shrink-0 pt-2">Session Format</Label>
        <RadioGroup
          value={formData.sessionFormat}
          onValueChange={(value) => onInputChange("sessionFormat", value)}
          className="flex-1"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
              <RadioGroupItem value="live" id="live" />
              <Label htmlFor="live" className="text-sm cursor-pointer">
                Live Session
              </Label>
            </div>
            <div className="flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
              <RadioGroupItem value="recorded" id="recorded" />
              <Label htmlFor="recorded" className="text-sm cursor-pointer">
                Recorded Session
              </Label>
            </div>
          </div>
        </RadioGroup>
      </div>

      {/* Panelist's Information Section */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4">
        <h3 className="text-gray-800 font-semibold text-lg">Panelist's Information</h3>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <Label className="text-gray-700 font-medium text-base w-full sm:w-24 flex-shrink-0">Name</Label>
          <Input
            value={formData.panelistName}
            onChange={(e) => onInputChange("panelistName", e.target.value)}
            className="bg-white border border-gray-200 rounded-lg h-12 flex-1"
            placeholder=""
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
          <Label className="text-gray-700 font-medium text-base w-full sm:w-24 flex-shrink-0 pt-2">Bio</Label>
          <Textarea
            value={formData.panelistBio}
            onChange={(e) => onInputChange("panelistBio", e.target.value)}
            className="bg-white border border-gray-200 rounded-lg min-h-[100px] resize-none flex-1"
            placeholder=""
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <Label className="text-gray-700 font-medium text-base w-full sm:w-24 flex-shrink-0">Designation</Label>
          <Input
            value={formData.panelistDesignation}
            onChange={(e) => onInputChange("panelistDesignation", e.target.value)}
            className="bg-white border border-gray-200 rounded-lg h-12 flex-1"
            placeholder=""
          />
        </div>
      </div>

      {/* Moderator's Information Section */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4">
        <h3 className="text-gray-800 font-semibold text-lg">Moderator's Information</h3>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <Label className="text-gray-700 font-medium text-base w-full sm:w-24 flex-shrink-0">Name</Label>
          <Input
            value={formData.moderatorName}
            onChange={(e) => onInputChange("moderatorName", e.target.value)}
            className="bg-white border border-gray-200 rounded-lg h-12 flex-1"
            placeholder=""
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
          <Label className="text-gray-700 font-medium text-base w-full sm:w-24 flex-shrink-0 pt-2">Bio</Label>
          <Textarea
            value={formData.moderatorBio}
            onChange={(e) => onInputChange("moderatorBio", e.target.value)}
            className="bg-white border border-gray-200 rounded-lg min-h-[100px] resize-none flex-1"
            placeholder=""
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <Label className="text-gray-700 font-medium text-base w-full sm:w-24 flex-shrink-0">Designation</Label>
          <Input
            value={formData.moderatorDesignation}
            onChange={(e) => onInputChange("moderatorDesignation", e.target.value)}
            className="bg-white border border-gray-200 rounded-lg h-12 flex-1"
            placeholder=""
          />
        </div>
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
