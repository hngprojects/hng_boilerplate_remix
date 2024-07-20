import React from 'react';
import { ArrowUp, ArrowDown, Copy, Trash } from 'lucide-react'; // Ensure these icons are correctly imported

interface ToolbarProps {
  onDelete: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onCopy: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({ onDelete, onMoveUp, onMoveDown, onCopy }) => {
  return (
    <div className="toolbar">
      <button onClick={onMoveUp} aria-label="Move up"><ArrowUp /></button>
      <button onClick={onMoveDown} aria-label="Move down"><ArrowDown /></button>
      <button onClick={onCopy} aria-label="Copy"><Copy /></button>
      <button onClick={onDelete} aria-label="Delete"><Trash /></button>
    </div>
  );
};
