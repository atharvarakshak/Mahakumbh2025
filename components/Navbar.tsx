"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Trophy, User, Target } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path;
  
  return (
    <nav className="bg-[#1E3932] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold hover:text-[#00704A] transition-colors">
            Mahakumbh 2025
          </Link>
          
          <div className="flex space-x-4">
            <Link
              href="/profile"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-[#00704A] transition-colors ${
                isActive("/profile") ? "bg-[#00704A]" : ""
              }`}
            >
              <User className="w-5 h-5" />
              <span>Profile</span>
            </Link>
            
            <Link
              href="/leaderboard"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-[#00704A] transition-colors ${
                isActive("/leaderboard") ? "bg-[#00704A]" : ""
              }`}
            >
              <Trophy className="w-5 h-5" />
              <span>Leaderboard</span>
            </Link>
            
            <Link
              href="/challenges"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-[#00704A] transition-colors ${
                isActive("/challenges") ? "bg-[#00704A]" : ""
              }`}
            >
              <Target className="w-5 h-5" />
              <span>Challenges</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}