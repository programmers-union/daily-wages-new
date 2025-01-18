import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { EarningsCalculator } from '@/components/earnings-calculator'
import { Header } from '@/components/header'

export default function Page() {
  return (
    <div className="min-h-screen bg-">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mt-16 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight">
              The new app for{' '}
              <span className="text-[#ff4d12]">quality jobs, on-demand</span>
            </h1>
            <div className="flex gap-2 text-sm">
              <span>🏠 Local jobs</span>
              <span>💰 Better earnings</span>
              <span>✨ No hidden fees</span>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">See how much you could earn</h2>
              <EarningsCalculator />
            </div>
            <div>
              <Button className="bg-[#ff4d12] hover:bg-[#ff4d12]/90">
                Join waitlist
                <span className="ml-2">→</span>
              </Button>
              <p className="mt-2 text-sm text-muted-foreground">Launching in 2025</p>
            </div>
          </div>
          <div className="relative h-[600px]">
            <Image
              src="/placeholder.svg"
              alt="App preview"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="container mx-auto px-4 py-12 overflow-hidden">
        <div className="flex gap-4 animate-scroll">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex-none w-72 p-4 shadow-[#f5f5f3] border-2 border-[#f5f5f3] rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div>
                  <h3 className="font-semibold">Job Title</h3>
                  <p className="text-sm text-muted-foreground">2.5 miles away</p>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-xl font-bold">£{200 + i * 50}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              Get the work <span className="text-[#ff4d12]">you want</span>,
              <br />when you want it
            </h2>
            <p className="text-lg text-muted-foreground">
              Yoderlay connects trusted tradespeople with local jobs in minutes.
              Quickly get the info you need, view photos, and screen customers
              before taking on a job.
            </p>
            <Button className="bg-[#ff4d12] hover:bg-[#ff4d12]/90">
              Earn with Yoderlay →
            </Button>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg"
              alt="Feature illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg"
              alt="Calendar view"
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              All the tools <span className="text-[#ff4d12]">you need to</span>
              <br />grow <span className="text-[#ff4d12]">your business</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Keep track of all your upcoming jobs in Yoderlay. Chat directly with
              customers, receive payments automatically and get dedicated
              support when you need it.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <span className="text-[#ff4d12]">✓</span>
                Promote your business locally
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ff4d12]">✓</span>
                Send quotes and schedule jobs
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ff4d12]">✓</span>
                Review customers
              </li>
            </ul>
            <Button className="bg-[#ff4d12] hover:bg-[#ff4d12]/90">
              Grow your business →
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#ff4d12] m-4 md:m-20 rounded-3xl text-white py-24">
        <div className="container mx-auto px-4 text-center space-y-12">
          <h2 className="text-4xl font-bold">Free to join. Easy to use.</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Unlike other platforms, with Yoderlay there's no sign-up cost, no
            subscription fees and only a 5% service fee on completed jobs.
            Oh, and you get your first month free.
          </p>
          <div className="flex justify-center gap-12">
            <div className="text-center">
              <div className="text-4xl mb-2">↓</div>
              <div>Download</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <div>Find jobs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💰</div>
              <div>Get paid</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">✨</div>
              <div>Easy!</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-sm">📅 Launching in 2025</div>
            <h2 className="text-4xl font-bold">
              Sign up today to get
              <br />early access to <span className="text-[#ff4d12]">local jobs</span>
            </h2>
            <Button className="bg-[#ff4d12] hover:bg-[#ff4d12]/90">
              Join waitlist →
            </Button>
            <div className="flex gap-4 mt-6">
              <Image
                src="/placeholder.svg"
                alt="App Store"
                width={120}
                height={40}
                className="object-contain"
              />
              <Image
                src="/placeholder.svg"
                alt="Google Play"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
          <div className="relative h-[600px]">
            <Image
              src="/placeholder.svg"
              alt="App preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-[#ff4d12] text-2xl font-bold mb-2">Daily Wages</div>
            <div className="text-sm text-muted-foreground">Daily Wages © 2025</div>
            <div className="text-sm text-muted-foreground">Kochi, Kerala</div>
          </div>
          <div className="flex gap-8">
            <Link href="#" className="text-sm">Legal & Privacy Policy</Link>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm">Any questions?</Link>
              <Link href="#" className="text-sm">Contact us</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm">TikTok</Link>
              <Link href="#" className="text-sm">Instagram</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

