"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "@/components/ui/card";
import { type Clip } from "./timeline";
import { cn } from "@/lib/utils";
import { Video, Image, Type } from "lucide-react";

interface TimelineClipProps {
  clip: Clip;
  isSelected?: boolean;
  onSelect: () => void;
}

export function TimelineClip({ clip, isSelected, onSelect }: TimelineClipProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: clip.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const IconComponent = {
    video: Video,
    image: Image,
    text: Type,
  }[clip.type];

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        "w-32 h-20 cursor-move transition-colors",
        isSelected && "ring-2 ring-primary",
        "hover:bg-accent"
      )}
      onClick={onSelect}
    >
      <div className="h-full p-2 flex flex-col justify-between">
        <div className="flex items-center gap-2">
          <IconComponent className="w-4 h-4" />
          <span className="text-xs truncate">{clip.title}</span>
        </div>
        <div className="text-xs text-muted-foreground">
          {Math.round(clip.duration)}s
        </div>
      </div>
    </Card>
  );
}