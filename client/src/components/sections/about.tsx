import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide comprehensive pet care solutions that enhance the lives of pets and their owners.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Our Services</h3>
              <p className="text-muted-foreground">
                From vaccination tracking to pet KYC, we offer a range of services to keep your pets healthy and happy.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Our Community</h3>
              <p className="text-muted-foreground">
                Join our growing community of pet lovers and share experiences with fellow pet parents.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
