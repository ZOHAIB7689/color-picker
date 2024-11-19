"use client";

import { useState, ChangeEvent } from "react";
import { Card, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function ColorPicker() {
  const [color, setColor] = useState<string>("#000000");

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setColor(e.target.value);
  };

  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(color);
    alert("Copied to clipboard");
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen transition-all"
      style={{
        background: `linear-gradient(to bottom, ${color}33, #ffffff)`,
      }}
    >
      <Card
        className="w-full max-w-md p-6 mx-auto grid gap-8 rounded-xl transition-all duration-500"
        style={{
          boxShadow: `0 4px 15px ${color}`,
        }}
      >
        <div className="text-center space-y-2">
          <CardTitle className="text-3xl font-bold text-gray-800">
            Color Picker
          </CardTitle>
          <CardDescription className="text-gray-600">
            Select a color and copy the hex and RGB values.
          </CardDescription>
        </div>
        <div className="grid gap-4">
          {/* Color Display */}
          <div
            className="w-full h-48 rounded-lg border-4 border-gray-200 transition-all"
            style={{ backgroundColor: color }}
          />
          <div className="grid gap-2 text-center">
            <div className="text-2xl font-semibold" style={{ color: color }}>
              {color}
            </div>
            <div className="text-gray-500">
              RGB: {parseInt(color.slice(1, 3), 16)}, {parseInt(color.slice(3, 5), 16)}, {parseInt(color.slice(5, 7), 16)}
            </div>
            {/* Copy Button */}
            <Button
              onClick={copyToClipboard}
              variant="default"
              className="w-full bg-gray-800 text-white hover:bg-gray-700 transition-all"
            >
              Copy To Clipboard
            </Button>
          </div>
          {/* Color Picker Input */}
          <Input
            type="color"
            value={color}
            onChange={handleColorChange}
            className="w-full h-16 p-0 border-0 rounded-md cursor-pointer transition-all"
          />
        </div>
      </Card>
    </div>
  );
}
