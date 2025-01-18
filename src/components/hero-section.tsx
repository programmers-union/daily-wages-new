"use client"


import { useState, useEffect } from 'react'
import Image from "next/image"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export function HeroSection() {
    const services = [
        " fix the lights",
        " do some errands",
        " clean my home",
        " repair appliances",
        " paint my walls"
      ]
      const [currentText, setCurrentText] = useState("")
      const [currentIndex, setCurrentIndex] = useState(0)
      const [isInputVisible, setIsInputVisible] = useState(false);
      const [userInput, setUserInput] = useState("");
    
      const handleTextClick = () => setIsInputVisible(true);
      const handleInputBlur = () => setIsInputVisible(false);
    
      useEffect(() => {
        if (isInputVisible || userInput) return;
    
        const timeout = setTimeout(() => {
          const current = services[currentIndex]
          
          if (currentText.length < current.length) {
            setCurrentText(current.slice(0, currentText.length + 1))
          } else {
            setTimeout(() => {
              setCurrentIndex((currentIndex + 1) % services.length)
              setCurrentText("")
            }, 1000)
          }
        }, 100)
    
        return () => clearTimeout(timeout)
      }, [currentText, currentIndex, isInputVisible, userInput])
    return(
        <section className="relative">
        <div className="container  min-h-screen mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10 space-y-6">
            <p className="text-sm tracking-wider">Daily Wages</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold ">
              I want someone to<br/>{" "}
              {isInputVisible ? (
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onBlur={handleInputBlur}
                  className="bg-transparent border-b border-white outline-none"
                  autoFocus
                />
              ) : (
                <span className="text-[#ff4d12] cursor-pointer" onClick={handleTextClick}>
                  {userInput || currentText}
                  <span className="animate-pulse ">|</span>
                </span>
              )}
            </h1>
            <p className="text-lg text-gray-600">
              Experienced, hand-picked Professionals to serve you at your doorstep
            </p>
            <div className="w-full max-w-sm">
              <CitySelect />
            </div>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <Image
              src="/images/img.jpg"
              alt="Professional service provider"
              width={1300}
              height={1000}
              className="h-96 object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </section>
    )
}




function CitySelect() {
  return (
    <Select>
      <SelectTrigger className="w-full bg-white text-black">
        <SelectValue placeholder="Select your city" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="delhi">Kochi</SelectItem>
        <SelectItem value="mumbai">Mumbai</SelectItem>
        <SelectItem value="bangalore">Bangalore</SelectItem>
        <SelectItem value="hyderabad">Hyderabad</SelectItem>
        <SelectItem value="chennai">Chennai</SelectItem>
      </SelectContent>
    </Select>
  )
}

