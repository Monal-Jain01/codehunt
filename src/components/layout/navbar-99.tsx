"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, User } from "lucide-react";
import { useState } from "react";
import { UserAvatar } from "./user-avatar";

interface Navbar99Props {
  user?: {
    fullName: string;
    email: string;
  } | null;
}

export function Navbar99({ user }: Navbar99Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Bar */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12 text-sm">
            <div className="flex items-center gap-6">
              <Link href="/" className="font-bold text-xl text-primary">
                99AI
              </Link>
              <div className="hidden md:flex items-center gap-4">
                <Link href="/search?type=buy" className="hover:text-primary">
                  Buy
                </Link>
                <Link href="/search?type=rent" className="hover:text-primary">
                  Rent
                </Link>
                <Link href="/search?type=commercial" className="hover:text-primary">
                  Commercial
                </Link>
                <Link href="/search?type=pg" className="hover:text-primary">
                  PG
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {user ? (
                <UserAvatar fullName={user.fullName} email={user.email} />
              ) : (
                <Button variant="ghost" size="sm" asChild className="hidden md:flex">
                  <Link href="/auth/login">
                    <User className="h-4 w-4 mr-1" />
                    Login
                  </Link>
                </Button>
              )}
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                Post Property
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by locality, landmark, project, or builder..."
                className="pl-10 h-11 border-gray-300"
              />
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white h-11 px-6 font-semibold">
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="hidden md:block bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 h-12 text-sm">
            <Link href="/research" className="hover:text-primary">
              Deep Research
            </Link>
            <Link href="/map" className="hover:text-primary">
              Map View
            </Link>
            <Link href="/land-banking" className="hover:text-primary">
              Pre-Launch
            </Link>
            <Link href="/loans" className="hover:text-primary">
              Home Loans
            </Link>
            <Link href="/news" className="hover:text-primary">
              News & Insights
            </Link>
            <Link href="/dashboard" className="hover:text-primary">
              My Dashboard
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link
              href="/search?type=buy"
              className="block py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Buy
            </Link>
            <Link
              href="/search?type=rent"
              className="block py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rent
            </Link>
            <Link
              href="/search?type=commercial"
              className="block py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Commercial
            </Link>
            <Link
              href="/research"
              className="block py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Deep Research
            </Link>
            <Link
              href="/map"
              className="block py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Map View
            </Link>
            <Link
              href="/land-banking"
              className="block py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pre-Launch
            </Link>
            <Link
              href="/loans"
              className="block py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home Loans
            </Link>
            <Link
              href="/news"
              className="block py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              News & Insights
            </Link>
            {!user && (
              <Link
                href="/auth/login"
                className="block py-2 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
