"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface WebinarFormProps {
  formData: any
  onInputChange: (field: string, value: string) => void
}

export default function WebinarForm({ formData, onInputChange }: WebinarFormProps) {
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

      {/* Duration */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <Label className="text-gray-800 font-medium text-base w-full sm:w-32 flex-shrink-0">Duration</Label>
        <Input
          value={formData.duration}
          onChange={(e) => onInputChange("duration", e.target.value)}
          className="bg-gray-50 border border-gray-200 rounded-lg h-12 flex-1 focus:bg-white"
          placeholder=""
        />
      </div>

      {/* Audience Intended */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
        <Label className="text-gray-800 font-medium text-base w-full sm:w-32 flex-shrink-0 pt-2">
          Audience Intended
        </Label>
        <RadioGroup
          value={formData.audienceIntended}
          onValueChange={(value) => onInputChange("audienceIntended", value)}
          className="flex-1"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
              <RadioGroupItem value="option1" id="option1" />
              <Label htmlFor="option1" className="text-sm cursor-pointer">
                Option 1
              </Label>
            </div>
            <div className="flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
              <RadioGroupItem value="option2" id="option2" />
              <Label htmlFor="option2" className="text-sm cursor-pointer">
                Option 2
              </Label>
            </div>
            <div className="flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
              <RadioGroupItem value="option3" id="option3" />
              <Label htmlFor="option3" className="text-sm cursor-pointer">
                Option 3
              </Label>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 w-fit">
              <RadioGroupItem value="option4" id="option4" />
              <Label htmlFor="option4" className="text-sm cursor-pointer">
                Option 4
              </Label>
            </div>
          </div>
        </RadioGroup>
      </div>

      {/* Description */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
        <Label className="text-gray-800 font-medium text-base w-full sm:w-32 flex-shrink-0 pt-2">Description</Label>
        <Textarea
          value={formData.description}
          onChange={(e) => onInputChange("description", e.target.value)}
          className="bg-gray-50 border border-gray-200 rounded-lg min-h-[120px] resize-none flex-1 focus:bg-white"
          placeholder=""
        />
      </div>

      {/* Speaker's Name */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <Label className="text-gray-800 font-medium text-base w-full sm:w-32 flex-shrink-0">Speaker's Name</Label>
        <Input
          value={formData.speakerName}
          onChange={(e) => onInputChange("speakerName", e.target.value)}
          className="bg-gray-50 border border-gray-200 rounded-lg h-12 flex-1 focus:bg-white"
          placeholder=""
        />
      </div>

      {/* Speaker's Email */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <Label className="text-gray-800 font-medium text-base w-full sm:w-32 flex-shrink-0">Speaker's Email</Label>
        <Input
          type="email"
          value={formData.speakerEmail}
          onChange={(e) => onInputChange("speakerEmail", e.target.value)}
          className="bg-gray-50 border border-gray-200 rounded-lg h-12 flex-1 focus:bg-white"
          placeholder=""
        />
      </div>

      {/* Contact */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <Label className="text-gray-800 font-medium text-base w-full sm:w-32 flex-shrink-0">Contact</Label>
        <Input
          value={formData.contact}
          onChange={(e) => onInputChange("contact", e.target.value)}
          className="bg-gray-50 border border-gray-200 rounded-lg h-12 flex-1 focus:bg-white"
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
