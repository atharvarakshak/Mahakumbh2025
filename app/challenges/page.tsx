"use client";

import { Card } from "@/components/ui/card";
import { Target, Clock, Award, Users } from "lucide-react";

const challenges = [
  {
    id: 1,
    title: "30-Day Zero Waste Challenge",
    description: "Maintain perfect waste segregation for 30 consecutive days",
    participants: 1245,
    reward: 1000,
    daysLeft: 15,
    progress: 60,
  },
  {
    id: 2,
    title: "Community Clean-up Drive",
    description: "Participate in organized clean-up events during Mahakumbh",
    participants: 856,
    reward: 750,
    daysLeft: 7,
    progress: 40,
  },
  {
    id: 3,
    title: "Recycling Master",
    description: "Correctly segregate 100 items in a week",
    participants: 2134,
    reward: 500,
    daysLeft: 3,
    progress: 75,
  },
  {
    id: 4,
    title: "Eco-Warrior Badge",
    description: "Complete 5 different waste management challenges",
    participants: 967,
    reward: 1500,
    daysLeft: 20,
    progress: 20,
  },
];

export default function ChallengesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Target className="w-10 h-10 text-[#006241]" />
          <h1 className="text-3xl font-bold text-[#1E3932]">Active Challenges</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className="p-6">
              <h3 className="text-xl font-semibold text-[#1E3932] mb-3">
                {challenge.title}
              </h3>
              <p className="text-gray-600 mb-4">{challenge.description}</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>{challenge.participants} participants</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{challenge.daysLeft} days remaining</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Award className="w-4 h-4" />
                  <span>{challenge.reward} points reward</span>
                </div>
                
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div className="text-xs font-semibold text-[#006241]">
                      Progress
                    </div>
                    <div className="text-xs font-semibold text-[#006241]">
                      {challenge.progress}%
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-[#F1F8F6]">
                    <div
                      style={{ width: `${challenge.progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#006241]"
                    ></div>
                  </div>
                </div>
                
                <button className="w-full bg-[#006241] text-white py-2 rounded-md hover:bg-[#00704A] transition-colors">
                  Join Challenge
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}