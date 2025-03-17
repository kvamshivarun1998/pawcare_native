import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Store() {
  return (
    <section id="store" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pet Store</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {['Food', 'Toys', 'Accessories', 'Health'].map((category) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Browse our selection of premium {category.toLowerCase()} for your pets
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
