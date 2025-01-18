"use client";

import { Card } from "@/components/ui/card";
import { Trophy, Medal } from "lucide-react";

const leaderboardData = [
  { rank: 1, name: "Sarah Johnson", points: 5240, items: 312 },
  { rank: 2, name: "Michael Chen", points: 4890, items: 295 },
  { rank: 3, name: "Emma Davis", points: 4650, items: 278 },
  { rank: 4, name: "Alex Kumar", points: 4320, items: 256 },
  { rank: 5, name: "Maria Garcia", points: 4150, items: 243 },
  { rank: 6, name: "John Smith", points: 3980, items: 235 },
  { rank: 7, name: "Lisa Wong", points: 3760, items: 220 },
  { rank: 8, name: "David Miller", points: 3590, items: 212 },
  { rank: 9, name: "Anna Brown", points: 3420, items: 201 },
  { rank: 10, name: "James Wilson", points: 3290, items: 194 },
];

export default function LeaderboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Trophy className="w-10 h-10 text-[#006241]" />
          <h1 className="text-3xl font-bold text-[#1E3932]">Leaderboard</h1>
        </div>

        <Card className="p-6">
          <div className="grid grid-cols-1 gap-4">
            {leaderboardData.map((user) => (
              <div
                key={user.rank}
                className={`flex items-center gap-4 p-4 rounded-lg ${
                  user.rank <= 3 ? "bg-[#F1F8F6]" : "bg-white"
                }`}
              >
                <div className="w-8 text-center font-bold text-[#006241]">
                  {user.rank <= 3 ? (
                    <Medal className="w-6 h-6 mx-auto" />
                  ) : (
                    user.rank
                  )}
                </div>
                
                <div className="flex-grow">
                  <h3 className="font-semibold text-[#1E3932]">{user.name}</h3>
                  <p className="text-sm text-gray-600">{user.items} items recycled</p>
                </div>
                
                <div className="text-right">
                  <p className="font-bold text-[#006241]">{user.points}</p>
                  <p className="text-sm text-gray-600">points</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}