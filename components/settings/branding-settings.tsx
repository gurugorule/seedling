"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ColorPicker } from "./color-picker";

interface BrandingSettings {
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
}

export function BrandingSettings() {
  const [settings, setSettings] = useState<BrandingSettings>({
    logo: "",
    primaryColor: "#7C3AED",
    secondaryColor: "#4F46E5",
    fontFamily: "Inter",
  });

  const handleSave = () => {
    // Save branding settings to backend
    console.log("Saving branding settings:", settings);
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Branding Settings</h2>
      
      <div className="space-y-6">
        <div>
          <Label>Logo</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setSettings(prev => ({
                    ...prev,
                    logo: reader.result as string
                  }));
                };
                reader.readAsDataURL(file);
              }
            }}
          />
        </div>

        <div>
          <Label>Primary Color</Label>
          <ColorPicker
            color={settings.primaryColor}
            onChange={(color) => setSettings(prev => ({
              ...prev,
              primaryColor: color
            }))}
          />
        </div>

        <div>
          <Label>Secondary Color</Label>
          <ColorPicker
            color={settings.secondaryColor}
            onChange={(color) => setSettings(prev => ({
              ...prev,
              secondaryColor: color
            }))}
          />
        </div>

        <div>
          <Label>Font Family</Label>
          <select
            className="w-full p-2 border rounded-md"
            value={settings.fontFamily}
            onChange={(e) => setSettings(prev => ({
              ...prev,
              fontFamily: e.target.value
            }))}
          >
            <option value="Inter">Inter</option>
            <option value="Roboto">Roboto</option>
            <option value="Open Sans">Open Sans</option>
            <option value="Montserrat">Montserrat</option>
          </select>
        </div>

        <Button onClick={handleSave} className="w-full">
          Save Branding Settings
        </Button>
      </div>
    </Card>
  );
}