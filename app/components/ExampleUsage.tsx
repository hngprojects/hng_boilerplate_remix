
import React from 'react';
import EditorBlock from './EditorBlock'; // Correct import path
import { EditorProvider } from './EditorContext';

const ExampleUsage: React.FC = () => {
  return (
    <EditorProvider>
        <EditorBlock index={0}>
            <p>This is a block of content</p>
        </EditorBlock>
        <EditorBlock index={1}>
            <p>This is another block of content</p>
        </EditorBlock>
    </EditorProvider>
  );
};

export default ExampleUsage;


