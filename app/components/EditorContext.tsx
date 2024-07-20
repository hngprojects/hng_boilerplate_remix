import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the Block interface
interface Block {
  content: ReactNode;
}

// Define the EditorContextProps interface
interface EditorContextProps {
  blocks: Block[];
  addBlock: (block: Block) => void;
  deleteBlock: (index: number) => void;
  moveBlockUp: (index: number) => void;
  moveBlockDown: (index: number) => void;
  copyBlock: (index: number) => void;
}

// Create a default context value
const defaultContextValue: EditorContextProps = {
  blocks: [],
  addBlock: () => {},
  deleteBlock: () => {},
  moveBlockUp: () => {},
  moveBlockDown: () => {},
  copyBlock: () => {},
};

// Create the context
const EditorContext = createContext<EditorContextProps>(defaultContextValue);

// Custom hook to use the EditorContext
export const useEditorContext = (): EditorContextProps => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditorContext must be used within an EditorProvider');
  }
  return context;
};

// Provider component
export const EditorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  const addBlock = (block: Block) => {
    setBlocks([...blocks, block]);
  };

  const deleteBlock = (index: number) => {
    const newBlocks = blocks.filter((_, i) => i !== index);
    setBlocks(newBlocks);
  };

  const moveBlockUp = (index: number) => {
    if (index > 0) {
      const newBlocks = [...blocks];
      const temp = newBlocks[index];
      newBlocks[index] = newBlocks[index - 1];
      newBlocks[index - 1] = temp;
      setBlocks(newBlocks);
    }
  };

  const moveBlockDown = (index: number) => {
    if (index < blocks.length - 1) {
      const newBlocks = [...blocks];
      const temp = newBlocks[index];
      newBlocks[index] = newBlocks[index + 1];
      newBlocks[index + 1] = temp;
      setBlocks(newBlocks);
    }
  };

  const copyBlock = (index: number) => {
    const newBlocks = [...blocks, blocks[index]];
    setBlocks(newBlocks);
  };

  return (
    <EditorContext.Provider value={{ blocks, addBlock, deleteBlock, moveBlockUp, moveBlockDown, copyBlock }}>
      {children}
    </EditorContext.Provider>
  );
};

