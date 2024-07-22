// src/components/TemplateEditorBlock.tsx
import React, { useEffect, useRef, useState } from "react";

import { useEditor } from "../components/context/EditorContext";
import Toolbar from "./Toolbar";

interface TemplateEditorBlockProperties {
  children: React.ReactNode;
  index: number;
}

const TemplateEditorBlock: React.FC<TemplateEditorBlockProperties> = ({
  children,
  index,
}) => {
  const { moveBlockUp, moveBlockDown, deleteBlock, copyBlock } = useEditor();
  const [isActive, setIsActive] = useState(false);
  const blockReference = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      blockReference.current &&
      !blockReference.current.contains(event.target as Node)
    ) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={blockReference}
      className={`relative ${isActive ? "border border-blue-500" : "border border-transparent"}`}
      onClick={() => setIsActive(true)}
    >
      {children}
      {isActive && (
        <Toolbar
          onMoveUp={() => moveBlockUp(index)}
          onMoveDown={() => moveBlockDown(index)}
          onDelete={() => deleteBlock(index)}
          onCopy={() => copyBlock(index)}
        />
      )}
    </div>
  );
};

export default TemplateEditorBlock;
