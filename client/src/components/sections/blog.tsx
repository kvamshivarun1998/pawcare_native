import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest from Our Blog</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Pet Care Tips",
              excerpt: "Essential tips for keeping your pets healthy and happy."
            },
            {
              title: "Training Guide",
              excerpt: "Professional advice on training your furry friends."
            },
            {
              title: "Nutrition Facts",
              excerpt: "Learn about proper nutrition for different pets."
            }
          ].map((post) => (
            <Card key={post.title}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
