"use client";

import { useState, useRef } from "react";
import { Upload, Camera, X, Image as ImageIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  onImageCapture: (file: File) => void;
}

export function ImageUpload({ onImageCapture }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
      onImageCapture(file);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const clearImage = () => {
    setPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (cameraInputRef.current) cameraInputRef.current.value = "";
  };

  return (
    <Card className="w-full">
      <div className="p-6">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="flex-1 w-full">
            <h2 className="text-2xl font-bold text-[#1E3932] mb-4">
              AI-Powered Waste Analysis
            </h2>
            <p className="text-gray-700 mb-4">
              Upload an image of your waste item, and our AI system will help you determine
              the correct segregation category.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => cameraInputRef.current?.click()}
                className="flex items-center gap-2 bg-[#006241] text-white hover:bg-[#1E3932]"
              >
                <Camera className="w-5 h-5" />
                Take Photo
              </Button>
              <Button
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 border-2 border-[#006241] text-[#006241] hover:bg-[#F1F8F6]"
              >
                <Upload className="w-5 h-5" />
                Upload Image
              </Button>
            </div>
          </div>

          <div 
            className={`w-full md:w-1/3 min-h-[200px] rounded-lg ${
              dragActive ? "bg-[#F1F8F6] border-[#006241]" : "bg-[#F1F8F6]"
            } transition-colors`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragActive(true);
            }}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
          >
            {preview ? (
              <div className="relative h-full min-h-[200px]">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  onClick={clearImage}
                  className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
                >
                  <X className="w-5 h-5 text-[#006241]" />
                </button>
              </div>
            ) : (
              <div className="h-full min-h-[200px] flex flex-col items-center justify-center p-4 text-center border-2 border-dashed border-[#006241] rounded-lg">
                <ImageIcon className="w-12 h-12 text-[#006241] mb-2" />
                <p className="text-sm text-gray-600">
                  Drag and drop your image here or use the buttons above
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleChange}
        className="hidden"
      />
    </Card>
  );
}