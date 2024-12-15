"use client";

import React from "react";
import ReactPlayer from "react-player";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface VideoPreviewProps {
  url: string;
  onProgress?: (state: { played: number; playedSeconds: number; loaded: number; loadedSeconds: number }) => void;
  onDuration?: (duration: number) => void;
}

export function VideoPreview({ url, onProgress, onDuration }: VideoPreviewProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-video relative">
          <ReactPlayer
            url={url}
            width="100%"
            height="100%"
            controls
            onProgress={onProgress}
            onDuration={onDuration}
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload",
                },
              },
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}