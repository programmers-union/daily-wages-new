'use client'

import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { HelpCircle } from 'lucide-react'

const jobTypes = [
  { label: 'Waste Removal', value: 'waste-removal', rate: 104 },
  { label: 'Plumbing', value: 'plumbing', rate: 125 },
  { label: 'Electrical', value: 'electrical', rate: 115 },
  { label: 'Gardening', value: 'gardening', rate: 95 },
]

const jobsPerWeek = Array.from({ length: 7 }, (_, i) => ({
  label: String(i + 1),
  value: String(i + 1)
}))

export function EarningsCalculator() {
  const [selectedJob, setSelectedJob] = useState(jobTypes[0].rate)
  const [jobCount, setJobCount] = useState(3)

  const weeklyEarnings = selectedJob * jobCount

  return (
    <div className="flex flex-col gap-4 sm:flex-row items-start sm:items-center">
      <Select
        defaultValue={jobTypes[0].value}
        onValueChange={(value) => {
          const job = jobTypes.find(job => job.value === value)
          setSelectedJob(job?.rate || jobTypes[0].rate)
        }}
      >
        <SelectTrigger className="w-[200px] bg-white">
          <SelectValue placeholder="Select job type" />
        </SelectTrigger>
        <SelectContent>
          {jobTypes.map((job) => (
            <SelectItem key={job.value} value={job.value}>
              {job.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        defaultValue="3"
        onValueChange={(value) => setJobCount(Number(value))}
      >
        <SelectTrigger className="w-[100px] bg-white">
          <SelectValue placeholder="Jobs" />
        </SelectTrigger>
        <SelectContent>
          {jobsPerWeek.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Card className="p-4 bg-[#f5f5f3]">
        <div className="flex items-center justify-between gap-8">
          <div>
            <div className="text-sm text-muted-foreground">Per week</div>
            <div className="text-4xl font-bold">£{weeklyEarnings}</div>
          </div>
          <HelpCircle className="text-muted-foreground" size={20} />
        </div>
      </Card>
    </div>
  )
}

