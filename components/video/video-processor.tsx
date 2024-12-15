"use client";

import { useState, useCallback } from "react";
import { Progress } from "@/components/ui/progress";
import { processVideoChunk, generateThumbnail } from "@/lib/utils/video-processing";
import { useDropzone } from "react-dropzone";
import { Card } from "@/components/ui/card";
import { Settings } from "lucide-react";

const CHUNK_SIZE = 1024 * 1024; // 1MB chunks

interface VideoProcessorProps {
  onProcessComplete: (result: { url: string; thumbnail: string }) => void;
}

export function VideoProcessor({ onProcessComplete }: VideoProcessorProps) {
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const processFile = async (file: File) => {
    setProcessing(true);
    const chunks = Math.ceil(file.size / CHUNK_SIZE);
    const processedChunks: ArrayBuffer[] = [];

    for (let i = 0; i < chunks; i++) {
      const chunk = file.slice(i * CHUNK_SIZE, (i + 1) * CHUNK_SIZE);
      const processedChunk = await processVideoChunk(chunk);
      processedChunks.push(processedChunk);
      setProgress((i + 1) / chunks * 100);
    }

    // Create video blob and thumbnail
    const videoBlob = new Blob(processedChunks, { type: file.type });
    const videoUrl = URL.createObjectURL(videoBlob);
    const video = document.createElement('video');
    video.src = videoUrl;

    video.onloadedmetadata = async () => {
      const thumbnail = await generateThumbnail(video, 0);
      onProcessComplete({ url: videoUrl, thumbnail });
      setProcessing(false);
      setProgress(0);
    };
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'video/*': ['.mp4', '.webm', '.mov'] },
    maxFiles: 1,
    onDrop: async (files) => {
      if (files[0]) await processFile(files[0]);
    },
  });

  return (
    <Card className="p-6">
      <div {...getRootProps()} className="border-2 border-dashed rounded-lg p-8 text-center">
        <input {...getInputProps()} />
        {processing ? (
          <div className="space-y-4">
            <Settings className="w-8 h-8 animate-spin mx-auto" />
            <div>Processing video... {Math.round(progress)}%</div>
            <Progress value={progress} />
          </div>
        ) : (
          <p>Drag & drop a video file here, or click to select one</p>
        )}
      </div>
    </Card>
  );
}