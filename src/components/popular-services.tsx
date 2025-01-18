import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    name: "Intense bathroom cleaning",
    image: "/images/img.jpg",
    rating: 4.78,
    reviews: "1.9M",
    price: 519,
    originalPrice: null,
    discount: null,
  },
  {
    id: 2,
    name: "Intense cleaning (2 bathrooms)",
    image: "/images/img.jpg",
    rating: 4.78,
    reviews: "1.9M",
    price: 950,
    originalPrice: 1038,
    discount: "8% OFF",
  },
  {
    id: 3,
    name: "Drill & hang (wall decor)",
    image: "/images/img.jpg",
    rating: 4.87,
    reviews: "113K",
    price: 100,
    originalPrice: null,
    discount: null,
  },
  {
    id: 4,
    name: "Door lock repair",
    image: "/images/img.jpg",
    rating: 4.85,
    reviews: "44K",
    price: 219,
    originalPrice: null,
    discount: null,
  },
  {
    id: 5,
    name: "Sara fruit cleanup",
    image: "/images/img.jpg",
    rating: 4.86,
    reviews: "136K",
    price: 699,
    originalPrice: null,
    discount: null,
  },
];

export function PopularServices() {
  return (
    <section className="pt-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Popular services
            </h2>
            <div className="hidden md:flex items-center gap-4">
              <CarouselPrevious className="relative hover:scale-110 transition-transform duration-300" />
              <CarouselNext className="relative hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <CarouselContent className=" my-8">
            {services.map((service) => (
              <CarouselItem
                key={service.id}
                className="pl-6 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Link href="#" className="block group">
                  <div className="p-4 rounded-2xl border border-gray-200 hover:rotate-3 hover:scale-110 transition-all duration-300 hover:shadow-lg bg-white">
                    <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-gray-100">
                      {service.discount && (
                        <div className="absolute top-3 left-3 bg-green-600 text-white text-sm px-3 py-1 rounded-full font-medium shadow-lg z-10">
                          {service.discount}
                        </div>
                      )}
                      <Image
                        src={service.image || "/api/placeholder/400/400"}
                        alt={service.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-all duration-500 ease-out"
                      />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium text-gray-900">
                            {service.rating}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          ({service.reviews})
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-gray-900">
                          ₹{service.price}
                        </span>
                        {service.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            ₹{service.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}