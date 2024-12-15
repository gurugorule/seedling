"use client";

import React from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { TimelineClip } from "./timeline-clip";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";

export interface Clip {
  id: string;
  type: "video" | "image" | "text";
  duration: number;
  thumbnail?: string;
  title: string;
}

interface TimelineProps {
  clips: Clip[];
  onReorder: (clips: Clip[]) => void;
  onClipSelect: (clipId: string) => void;
  selectedClipId?: string;
}

export function Timeline({ clips, onReorder, onClipSelect, selectedClipId }: TimelineProps) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = clips.findIndex((clip) => clip.id === active.id);
      const newIndex = clips.findIndex((clip) => clip.id === over.id);
      onReorder(arrayMove(clips, oldIndex, newIndex));
    }
  }

  return (
    <Card className="p-4 bg-muted/50">
      <ScrollArea className="w-full">
        <div className="flex gap-2 p-2 min-w-full">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={clips} strategy={horizontalListSortingStrategy}>
              {clips.map((clip) => (
                <TimelineClip
                  key={clip.id}
                  clip={clip}
                  isSelected={clip.id === selectedClipId}
                  onSelect={() => onClipSelect(clip.id)}
                />
              ))}
            </SortableContext>
          </DndContext>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Card>
  );
}