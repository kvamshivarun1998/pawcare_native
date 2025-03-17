import { Link } from "wouter";
import { UserNav } from "./user-nav";
import { useAuth } from "@/lib/auth";
import { PawPrint } from "lucide-react";

export function MainNav() {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="border-b bg-amber-50">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/">
          <a className="flex items-center space-x-2">
            <PawPrint className="h-8 w-8 text-amber-800" />
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent">
              PawCare
            </span>
          </a>
        </Link>

        <div className="ml-auto flex items-center space-x-6">
          <Link href="/about">
            <a className="text-sm font-medium transition-colors hover:text-amber-800">
              About Us
            </a>
          </Link>
          <Link href="/store">
            <a className="text-sm font-medium transition-colors hover:text-amber-800">
              Store
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-sm font-medium transition-colors hover:text-amber-800">
              Blog
            </a>
          </Link>
          <Link href="/community">
            <a className="text-sm font-medium transition-colors hover:text-amber-800">
              Community
            </a>
          </Link>
          <Link href="/pet-care">
            <a className="text-sm font-medium transition-colors hover:text-amber-800">
              Pet Care
            </a>
          </Link>
          {isAuthenticated && <UserNav />}
          {!isAuthenticated && (
            <Link href="/login">
              <a className="text-sm font-medium transition-colors hover:text-amber-800">
                Login
              </a>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}