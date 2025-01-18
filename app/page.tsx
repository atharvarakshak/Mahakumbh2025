"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Recycle as RecycleBin, Trash2, Leaf, Battery } from "lucide-react";
import { ImageUpload } from "@/components/ImageUpload";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageCapture = (file: File) => {
    setSelectedImage(file);
    console.log("Processing image:", file.name);
  };

  const wasteCategories = [
    {
      id: "recyclable",
      name: "Recyclable",
      icon: <RecycleBin className="w-6 h-6" />,
      color: "text-[#006241]",
      items: ["Paper", "Cardboard", "Glass", "Metal", "Plastic bottles", "Aluminum cans"],
      tips: "Clean and dry items before recycling. Remove caps and lids.",
    },
    {
      id: "organic",
      name: "Organic",
      icon: <Leaf className="w-6 h-6" />,
      color: "text-[#1E3932]",
      items: ["Food scraps", "Garden waste", "Coffee grounds", "Tea bags", "Fruit peels", "Vegetable scraps"],
      tips: "Avoid meat and dairy in home composting. Keep material moist but not wet.",
    },
    {
      id: "hazardous",
      name: "Hazardous",
      icon: <Battery className="w-6 h-6" />,
      color: "text-[#CD513F]",
      items: ["Batteries", "Electronics", "Paint", "Chemicals", "Light bulbs", "Motor oil"],
      tips: "Never mix chemicals. Store in original containers. Take to special disposal facilities.",
    },
    {
      id: "general",
      name: "General Waste",
      icon: <Trash2 className="w-6 h-6" />,
      color: "text-[#1E3932]",
      items: ["Diapers", "Sanitary items", "Broken ceramics", "Plastic wrap", "Styrofoam", "Used tissues"],
      tips: "Minimize general waste by choosing reusable alternatives when possible.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F1F8F6]">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1677959254573-8c1a5f2a9b7c?auto=format&fit=crop&q=80")',
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-4">Mahakumbh 2025</h1>
            <p className="text-xl mb-8">Join us in creating a cleaner and more sustainable spiritual gathering through smart waste management.</p>
            <a href="#waste-management" className="bg-[#006241] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#00704A] transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8" id="waste-management">
        <ImageUpload onImageCapture={handleImageCapture} />

        <Tabs defaultValue="recyclable" className="w-full mt-8">
          <TabsList className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-transparent h-auto">
            {wasteCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-[#006241] data-[state=active]:text-white data-[state=active]:shadow-md flex items-center gap-2 p-4"
              >
                <span className={`${category.color} group-data-[state=active]:text-white`}>{category.icon}</span>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {wasteCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card className="mt-6 p-6 border-[#006241] border-l-4">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-[#1E3932]">Common Items</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className={`${category.color} text-xl`}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-[#1E3932]">Tips</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {category.tips}
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 bg-[#1E3932] text-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Mahakumbh 2025 Waste Management Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-[#006241] bg-opacity-30 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Smart Segregation</h3>
              <p className="text-gray-100">
                Leveraging AI technology to ensure accurate waste segregation during the grand event.
              </p>
            </div>
            <div className="p-4 bg-[#006241] bg-opacity-30 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Zero Waste Initiative</h3>
              <p className="text-gray-100">
                Implementing comprehensive recycling and composting programs throughout the festival.
              </p>
            </div>
            <div className="p-4 bg-[#006241] bg-opacity-30 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Community Engagement</h3>
              <p className="text-gray-100">
                Educating and involving pilgrims in maintaining cleanliness during Mahakumbh.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}