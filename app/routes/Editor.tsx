import React from "react";

import { EditorProvider, useEditor } from "../components/context/EditorContext";
import TemplateEditorBlock from "../components/templateEditorBlock";

const Editor: React.FC = () => {
  const { blocks } = useEditor();

  return (
    <div className="flex flex-col space-y-4">
      {blocks.map((block, index) => (
        <TemplateEditorBlock key={index} index={index}>
          {block}
        </TemplateEditorBlock>
      ))}
    </div>
  );
};

const EditorWithProvider: React.FC = () => (
  <EditorProvider>
    <Editor />
  </EditorProvider>
);

export default EditorWithProvider;
