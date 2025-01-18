import Link from 'next/link'

export function Footer() {
  return (
    // <footer className="bg-black text-white py-12">
    //   <div className="container mx-auto px-4">
    //     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    //       <div>
    //         <h3 className="text-lg font-semibold mb-4">About Us</h3>
    //         <ul className="space-y-2">
    //           <li><Link href="#" className="hover:text-gray-300">Our Story</Link></li>
    //           <li><Link href="#" className="hover:text-gray-300">Team</Link></li>
    //           <li><Link href="#" className="hover:text-gray-300">Careers</Link></li>
    //           <li><Link href="#" className="hover:text-gray-300">Press</Link></li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h3 className="text-lg font-semibold mb-4">Services</h3>
    //         <ul className="space-y-2">
    //           <li><Link href="#" className="hover:text-gray-300">Home Cleaning</Link></li>
    //           <li><Link href="#" className="hover:text-gray-300">Appliance Repair</Link></li>
    //           <li><Link href="#" className="hover:text-gray-300">Painting</Link></li>
    //           <li><Link href="#" className="hover:text-gray-300">Plumbing</Link></li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h3 className="text-lg font-semibold mb-4">Support</h3>
    //         <ul className="space-y-2">
    //           <li><Link href="#" className="hover:text-gray-300">FAQs</Link></li>
    //           <li><Link href="#" className="hover:text-gray-300">Contact Us</Link></li>
    //           <li><Link href="#" className="hover:text-gray-300">Terms of Service</Link></li>
    //           <li><Link href="#" className="hover:text-gray-300">Privacy Policy</Link></li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
    //         <ul className="space-y-2">
    //           <li><Link href="#" className="hover:text-gray-300">Facebook</Link></li>
    //           <li><Link href="#" className="hover:text-gray-300">Twitter</Link></li>
    //           <li><Link href="#" className="hover:text-gray-300">Instagram</Link></li>
    //           <li><Link href="#" className="hover:text-gray-300">LinkedIn</Link></li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="mt-8 pt-8 border-t border-gray-700 text-center">
    //       <p>&copy; {new Date().getFullYear()} Urban Company. All rights reserved.</p>
    //     </div>
    //   </div>
    // </footer>
    <footer className="container bg-[#f3f3f3] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-[#ff4d12] text-2xl font-bold mb-2">Daily Wages</div>
            <div className="text-sm text-muted-foreground">DW © 2025</div>
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
  )
}

