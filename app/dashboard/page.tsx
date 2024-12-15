"use client";

import { useState } from "react";
import { ProjectHeader } from "@/components/dashboard/project-header";
import { EditorPanel } from "@/components/dashboard/editor-panel";
import { Timeline, type Clip } from "@/components/editor/timeline";
import { ExportDialog } from "@/components/dashboard/export-dialog";
import { EditorToolbar } from "@/components/editor/editor-toolbar";
import { useHistory } from "@/lib/hooks/use-history";
import { useToast } from "@/hooks/use-toast";
import type { Template } from "@/components/editor/template-picker";

export default function DashboardPage() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedClip, setSelectedClip] = useState<string>();
  const [exportFormat, setExportFormat] = useState("mp4");
  const [showExportDialog, setShowExportDialog] = useState(false);
  const { toast } = useToast();

  const {
    state: clips,
    set: setClips,
    undo,
    redo,
    canUndo,
    canRedo,
  } = useHistory<Clip[]>([
    {
      id: "1",
      type: "video",
      duration: 10,
      title: "Intro",
      thumbnail: "https://example.com/thumbnail1.jpg",
    },
    {
      id: "2",
      type: "text",
      duration: 5,
      title: "Title Card",
    },
    {
      id: "3",
      type: "image",
      duration: 3,
      title: "Logo",
      thumbnail: "https://example.com/thumbnail2.jpg",
    },
  ]);

  const handleUpload = async (file: File) => {
    setIsUploading(true);
    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      setUploadProgress(i);
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    setIsUploading(false);
    
    // Add uploaded clip to timeline
    setClips([...clips, {
      id: Date.now().toString(),
      type: "video",
      duration: 0,
      title: file.name,
    }]);

    toast({
      title: "Upload complete",
      description: "Your video has been added to the timeline.",
    });
  };

  const handleReorder = (newClips: Clip[]) => {
    setClips(newClips);
  };

  const handleExportFormat = (format: string) => {
    setExportFormat(format);
    setShowExportDialog(true);
  };

  const handleSave = () => {
    toast({
      title: "Project saved",
      description: "Your changes have been saved successfully.",
    });
  };

  const handleShare = () => {
    toast({
      title: "Share link copied",
      description: "Project share link has been copied to clipboard.",
    });
  };

  const handleExport = () => {
    toast({
      title: "Export complete",
      description: `Your video has been exported in ${exportFormat.toUpperCase()} format.`,
    });
    setShowExportDialog(false);
  };

  const handleTemplateSelect = (template: Template) => {
    // In a real app, we would load the template's clips
    setClips([
      {
        id: Date.now().toString(),
        type: "video",
        duration: 5,
        title: `${template.title} - Intro`,
      },
      {
        id: (Date.now() + 1).toString(),
        type: "text",
        duration: 3,
        title: "Template Title",
      },
    ]);

    toast({
      title: "Template loaded",
      description: `${template.title} template has been loaded.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        <ProjectHeader
          onExport={handleExportFormat}
          onSave={handleSave}
          onShare={handleShare}
        />
        
        <EditorToolbar
          onUndo={undo}
          onRedo={redo}
          canUndo={canUndo}
          canRedo={canRedo}
          onTemplateSelect={handleTemplateSelect}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 mt-4">
          <EditorPanel
            onUpload={handleUpload}
            progress={uploadProgress}
            isUploading={isUploading}
          />
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Timeline</h2>
            <Timeline
              clips={clips}
              onReorder={handleReorder}
              onClipSelect={setSelectedClip}
              selectedClipId={selectedClip}
            />
          </div>
        </div>

        <ExportDialog
          open={showExportDialog}
          onOpenChange={setShowExportDialog}
          format={exportFormat}
          onExport={handleExport}
        />
      </div>
    </div>
  );
}