import { Link } from "wouter";
import { UserNav } from "./user-nav";

export function MainNav() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/">
          <a className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              PawCare
            </span>
          </a>
        </Link>

        <div className="ml-auto flex items-center space-x-6">
          <Link href="/about">
            <a className="text-sm font-medium transition-colors hover:text-primary">
              About Us
            </a>
          </Link>
          <Link href="/store">
            <a className="text-sm font-medium transition-colors hover:text-primary">
              Store
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-sm font-medium transition-colors hover:text-primary">
              Blog
            </a>
          </Link>
          <Link href="/community">
            <a className="text-sm font-medium transition-colors hover:text-primary">
              Community
            </a>
          </Link>
          <Link href="/pet-care">
            <a className="text-sm font-medium transition-colors hover:text-primary">
              Pet Care
            </a>
          </Link>
          <UserNav />
        </div>
      </div>
    </nav>
  );
}