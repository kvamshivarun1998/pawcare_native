import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Community() {
  return (
    <section id="community" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Join Our Community</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Pet Parent Forums</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Connect with other pet parents, share experiences, and get advice from our community.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Expert Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Get access to veterinarians and pet care experts for professional guidance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
