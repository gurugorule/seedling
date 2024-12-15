"use client";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save, Share, Download } from "lucide-react";

interface ProjectHeaderProps {
  onExport: (format: string) => void;
  onSave: () => void;
  onShare: () => void;
}

export function ProjectHeader({ onExport, onSave, onShare }: ProjectHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6 bg-background/60 backdrop-blur-sm p-4 rounded-lg border">
      <h1 className="text-2xl font-bold">Video Editor</h1>
      <div className="flex items-center gap-4">
        <Select onValueChange={onExport} defaultValue="mp4">
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Export format" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mp4">MP4 (H.264)</SelectItem>
            <SelectItem value="webm">WebM (VP9)</SelectItem>
            <SelectItem value="mov">QuickTime (MOV)</SelectItem>
            <SelectItem value="gif">Animated GIF</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" onClick={onSave}>
          <Save className="w-4 h-4 mr-2" />
          Save
        </Button>
        <Button variant="outline" onClick={onShare}>
          <Share className="w-4 h-4 mr-2" />
          Share
        </Button>
      </div>
    </div>
  );
}