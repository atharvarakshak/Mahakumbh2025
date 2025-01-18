"use client";

import { Card } from "@/components/ui/card";
import { User, Award, Trash2 } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full bg-[#1E3932] flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <div className="flex-grow">
              <h1 className="text-3xl font-bold text-[#1E3932] mb-2">John Doe</h1>
              <p className="text-gray-600 mb-4">Waste Management Enthusiast</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-[#F1F8F6] p-4 rounded-lg">
                  <h3 className="font-semibold text-[#006241]">Points</h3>
                  <p className="text-2xl">2,450</p>
                </div>
                <div className="bg-[#F1F8F6] p-4 rounded-lg">
                  <h3 className="font-semibold text-[#006241]">Items Recycled</h3>
                  <p className="text-2xl">156</p>
                </div>
                <div className="bg-[#F1F8F6] p-4 rounded-lg">
                  <h3 className="font-semibold text-[#006241]">Rank</h3>
                  <p className="text-2xl">#42</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#1E3932] mb-4">Recent Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-4 p-4 bg-[#F1F8F6] rounded-lg">
                    <Award className="w-8 h-8 text-[#006241]" />
                    <div>
                      <h3 className="font-semibold">Recycling Champion</h3>
                      <p className="text-sm text-gray-600">Recycled 100 items</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-[#F1F8F6] rounded-lg">
                    <Trash2 className="w-8 h-8 text-[#006241]" />
                    <div>
                      <h3 className="font-semibold">Waste Warrior</h3>
                      <p className="text-sm text-gray-600">Perfect segregation streak</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}