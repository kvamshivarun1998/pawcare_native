import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PetCare() {
  return (
    <section id="pet-care" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pet Care Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Health Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Monitor your pet's health metrics and vaccination schedule.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Vaccination Records</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Keep track of all vaccinations and upcoming due dates.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pet KYC</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Maintain official documentation and verification for your pets.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
