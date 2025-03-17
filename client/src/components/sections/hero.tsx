import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative py-32 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Welcome to PawCare
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Your trusted partner in providing the best care for your furry friends.
          From health tracking to community support, we've got everything covered.
        </p>
        <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-500">
          Get Started
        </Button>
      </div>
    </div>
  );
}
