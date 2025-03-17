import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Hero() {
  return (
    <div className="relative py-32 px-4 bg-amber-50">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent">
          Welcome to PawCare
        </h1>
        <p className="text-xl text-amber-900/80 mb-8 max-w-2xl mx-auto">
          Your trusted partner in providing the best care for your furry friends.
          From health tracking to community support, we've got everything covered.
        </p>
        <div className="space-x-4">
          <Link href="/register">
            <Button size="lg" className="bg-gradient-to-r from-amber-800 to-amber-600 hover:from-amber-700 hover:to-amber-500">
              Get Started
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-800/10">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}