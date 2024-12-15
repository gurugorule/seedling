"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoUpload } from "@/components/video/video-upload";
import { VideoPreview } from "@/components/video/video-preview";

interface EditorPanelProps {
  onUpload: (file: File) => void;
  progress?: number;
  isUploading?: boolean;
  previewUrl?: string;
}

export function EditorPanel({ onUpload, progress, isUploading, previewUrl }: EditorPanelProps) {
  return (
    <Card className="p-4">
      <Tabs defaultValue="upload">
        <TabsList className="mb-4">
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="upload">
          <VideoUpload
            onUpload={onUpload}
            progress={progress}
            isUploading={isUploading}
          />
        </TabsContent>
        <TabsContent value="preview">
          <VideoPreview 
            url={previewUrl || "https://www.youtube.com/watch?v=dQw4w9WgXcQ"} 
          />
        </TabsContent>
      </Tabs>
    </Card>
  );
}