import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import type { User } from "@shared/schema";

export default function Profile() {
  const { data: user, isLoading } = useQuery<User>({
    queryKey: ["/api/user/profile"],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>My Profile</CardTitle>
        </CardHeader>
        <CardContent>
          {user && (
            <div className="space-y-4">
              <div>
                <label className="font-medium">Username</label>
                <p className="text-muted-foreground">{user.username}</p>
              </div>
              <div>
                <label className="font-medium">Full Name</label>
                <p className="text-muted-foreground">{user.fullName}</p>
              </div>
              <div>
                <label className="font-medium">Email</label>
                <p className="text-muted-foreground">{user.email}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
