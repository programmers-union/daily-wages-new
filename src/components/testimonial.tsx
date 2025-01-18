import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const testimonials = [
  {
    logo: "/placeholder.svg",
    quote: "If we didn't have Daily Wages...the quality of talent wouldn't be as easy to measure, and we wouldn't have the incredible support we get from the DailyWages team.",
    author: "Jessica Khawaja",
    title: "VP of People Operations",
    bgColor: "bg-emerald-800",
    textColor: "text-white",
    results: [
      {
        metric: "11 days",
        description: "to post a job, hire, classify, and onboard selected talent"
      },
      {
        metric: "Nearly Doubled",
        description: "the support hours for a project"
      }
    ]
  },
  {
    logo: "/placeholder.svg",
    quote: "One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.",
    author: "Carol Taylor",
    title: "Director of Content Experience",
    bgColor: "bg-orange-600",
    textColor: "text-white",
    results: [
      {
        metric: "50% Faster",
        description: "launch of projects"
      },
      {
        metric: "10,000",
        description: "projects completed"
      }
    ]
  },
  {
    logo: "/placeholder.svg",
    quote: "The platform has transformed how we find and work with talent, making it easier than ever to deliver quality results.",
    author: "Michael Chen",
    title: "Head of Engineering",
    bgColor: "bg-blue-700",
    textColor: "text-white",
    results: [
      {
        metric: "24/7",
        description: "access to global talent"
      },
      {
        metric: "90%",
        description: "satisfaction rate"
      }
    ]
  }
]

export function TestimonialCarousel() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Trusted by <br />tousands of people
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-2/3 lg:basis-1/2">
                <div className={`${testimonial.bgColor} ${testimonial.textColor} rounded-lg p-8 h-full`}>
                  <div className="h-8 mb-8">
                    <Image
                      src={testimonial.logo || "/placeholder.svg"}
                      alt="Company logo"
                      width={120}
                      height={32}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <blockquote className="text-xl md:text-2xl font-medium mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mb-8">
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="opacity-80">{testimonial.title}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-4">Results</div>
                    {testimonial.results.map((result, idx) => (
                      <div key={idx} className="mb-4">
                        <div className="text-2xl font-bold">{result.metric}</div>
                        <div className="opacity-80">{result.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}

