"use client";

import { Button } from "@/components/ui/button";
import { Undo2, Redo2, Templates } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { TemplatePicker, type Template } from "./template-picker";

interface EditorToolbarProps {
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  onTemplateSelect: (template: Template) => void;
}

export function EditorToolbar({
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  onTemplateSelect,
}: EditorToolbarProps) {
  const [showTemplates, setShowTemplates] = useState(false);

  return (
    <>
      <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
        <Button
          variant="ghost"
          size="icon"
          onClick={onUndo}
          disabled={!canUndo}
          title="Undo"
        >
          <Undo2 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onRedo}
          disabled={!canRedo}
          title="Redo"
        >
          <Redo2 className="h-4 w-4" />
        </Button>
        <Separator orientation="vertical" className="mx-2 h-6" />
        <Button
          variant="ghost"
          onClick={() => setShowTemplates(true)}
          className="gap-2"
        >
          <Templates className="h-4 w-4" />
          Templates
        </Button>
      </div>

      <TemplatePicker
        open={showTemplates}
        onOpenChange={setShowTemplates}
        onSelectTemplate={(template) => {
          onTemplateSelect(template);
          setShowTemplates(false);
        }}
      />
    </>
  );
}