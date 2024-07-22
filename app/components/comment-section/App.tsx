import { FC } from "react";

import CommentSection from "./CommentSection";

interface Comment {
  id: number;
  author: string;
  handle: string;
  comment: string;
  date: string;
}
const sampleComments: Comment[] = [
  {
    id: 1,
    author: "Matthew",
    handle: "@matt4real",
    comment:
      "Living a balanced lifestyle is essential. Focus on healthy eating, regular exercise, and mental well-being. A well-rounded lifestyle leads to a happier, more fulfilling life. Embrace positive habits and enjoy the journey.",
    date: "21-Jun-2024  Wed 12:20pm",
  },
  {
    id: 2,
    author: "Abraham",
    handle: "@SonofGod",
    comment:
      "Living a balanced lifestyle is essential. Focus on healthy eating, regular exercise, and mental well-being. A well-rounded lifestyle leads to a happier, more fulfilling life. Embrace positive habits and enjoy the journey.",
    date: "21-Jun-2024  Wed 12:20pm",
  },
  {
    id: 3,
    author: "Salma Bee",
    handle: "@msFits",
    comment:
      "Living a balanced lifestyle is essential. Focus on healthy eating, regular exercise, and mental well-being. A well-rounded lifestyle leads to a happier, more fulfilling life. Embrace positive habits and enjoy the journey.",
    date: "21-Jun-2024  Wed 12:20pm",
  },
];

const App: FC = () => {
  const addComment = (newComment: Comment) => {
    sampleComments.push(newComment);
  };
  return (
    <div className="font-family('Inter')">
      <CommentSection comments={sampleComments} onAddComment={addComment} />
    </div>
  );
};

export default App;
