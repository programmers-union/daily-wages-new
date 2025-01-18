import Link from "next/link";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200/20">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-[#ff4d12] text-3xl font-extrabold">
          DW
        </Link>
        <div className="flex items-center gap-4">
          <span className="hidden lg:block text-xs text-muted-foreground">Rolling out in 2025</span>
          <nav className="flex items-center space-x-6">
            <Link href="/tradespeople" className=" text-xs md:text-sm hover:text-gray-300 border-2 border-[#ff4d12] text-[#ff4d12] py-1.5 px-4 rounded-md" >
              Register As A Professional
            </Link>
            <Button
              variant="outline"
              className="text-sm text-white bg-[#ff4d12] border-none hover:bg-white hover:text-black"
            >
              Join the waitlist
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
