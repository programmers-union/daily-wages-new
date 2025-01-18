import {
  Shield,
  Receipt,
  Star,
  Package,
  Play,
  Apple,
  Smartphone,
} from "lucide-react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import { TestimonialCarousel } from "@/components/testimonial";
import { PopularServices } from "@/components/popular-services";
import Link from "next/link";

export default function Page() {
  return (
    <div className="">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Why Daily Wages Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Why Daily Wages?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Receipt className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Transparent pricing</h3>
                <p className="text-gray-600">
                  See fixed prices before you book. No hidden charges.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Star className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Experts only</h3>
                <p className="text-gray-600">
                  Our professionals are well trained and have on-job expertise.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Package className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Fully equipped</h3>
                <p className="text-gray-600">
                  We bring everything needed to get the job done well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assured Section */}
      <section className="bg-[#ff4d12] w-5/6 mx-auto rounded-3xl py-36 my-10">
        <div className="max-w- mx-auto text-center text-white space-y-6">
          <Shield className="w-32 h-32 mx-auto" />
          <h2 className="text-4xl font-bold">100% Quality Assured</h2>
          <p className="text-lg">
            If you don't love our service, we will make it right.
          </p>
        </div>
      </section>

      {/* Popular Services Section */}
      <PopularServices />

      {/* Testimonial Carousel Section */}
      <TestimonialCarousel />

      {/* App Download CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center space-y-4">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Download our app</h2>
            <p className="text-gray-600">
              Book services on the go with our mobile app. Available for iOS and
              Android.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <Link
                href="#"
                className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-black/80 transition-colors"
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Link>
              <Link
                href="#"
                className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-black/80 transition-colors"
              >
                <Play className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
