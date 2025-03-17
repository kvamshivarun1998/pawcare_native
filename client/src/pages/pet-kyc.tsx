import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import type { Pet } from "@shared/schema";

export default function PetKYC() {
  const { data: pets, isLoading } = useQuery<Pet[]>({
    queryKey: ["/api/pets/kyc"],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Pet KYC Status</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {pets?.map((pet) => (
          <Card key={pet.id}>
            <CardHeader>
              <CardTitle>{pet.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="font-medium">Species</label>
                  <p className="text-muted-foreground">{pet.species}</p>
                </div>
                <div>
                  <label className="font-medium">Breed</label>
                  <p className="text-muted-foreground">{pet.breed}</p>
                </div>
                <div>
                  <label className="font-medium">KYC Status</label>
                  <p className="text-muted-foreground">
                    {pet.kycVerified ? "Verified" : "Not Verified"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
