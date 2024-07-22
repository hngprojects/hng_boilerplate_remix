import * as ToolbarPrimitive from "@radix-ui/react-toolbar";
import { ArrowDown, ArrowUp, Copy, Trash2 } from "lucide-react";
import React from "react";

interface ToolbarProperties {
  onMoveUp: () => void;
  onMoveDown: () => void;
  onCopy: () => void;
  onDelete: () => void;
}

const Toolbar: React.FC<ToolbarProperties> = ({
  onMoveUp,
  onMoveDown,
  onCopy,
  onDelete,
}) => {
  return (
    <ToolbarPrimitive.Root className="absolute right-0 top-0 flex space-x-2 rounded-md bg-white p-2 shadow-md">
      <ToolbarPrimitive.Button onClick={onMoveUp} className="p-1">
        <ArrowUp />
      </ToolbarPrimitive.Button>
      <ToolbarPrimitive.Button onClick={onMoveDown} className="p-1">
        <ArrowDown />
      </ToolbarPrimitive.Button>
      <ToolbarPrimitive.Button onClick={onCopy} className="p-1">
        <Copy />
      </ToolbarPrimitive.Button>
      <ToolbarPrimitive.Button onClick={onDelete} className="p-1">
        <Trash2 />
      </ToolbarPrimitive.Button>
    </ToolbarPrimitive.Root>
  );
};

export default Toolbar;
