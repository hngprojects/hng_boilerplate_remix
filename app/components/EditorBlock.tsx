
import React, { ReactNode, useState, useEffect, KeyboardEvent } from 'react';
import { useEditorContext } from './EditorContext';
import { Toolbar } from './toolbar'; // Make sure this path is correct
import './EditorBlock.css'; // Ensure this path is correct

interface EditorBlockProps {
  children: ReactNode;
  index: number;
}

export const EditorBlock: React.FC<EditorBlockProps> = ({ children, index }) => {
  const [isActive, setIsActive] = useState(false);
  const { deleteBlock, moveBlockUp, moveBlockDown, copyBlock } = useEditorContext();

  const handleOutsideClick = (e: Event) => {
    if (!(e.target as HTMLElement).closest('.editor-block')) {
      setIsActive(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setIsActive(true);
    }
  };

  useEffect(() => {
    if (isActive) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isActive]);

  return (
    <div
      className={`editor-block ${isActive ? 'active' : 'inactive'}`}
      onClick={() => setIsActive(true)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      {children}
      {isActive && (
        <Toolbar
          onDelete={() => deleteBlock(index)}
          onMoveUp={() => moveBlockUp(index)}
          onMoveDown={() => moveBlockDown(index)}
          onCopy={() => copyBlock(index)}
        />
      )}
    </div>
  );
};

export default EditorBlock;