import { ChangeEvent, FC, FormEvent, useState } from "react";

import "../ui/index.css";

import Comments from "./Comments";

// import { Comment } from "./types";
interface Comment {
  id: number;
  author: string;
  handle: string;
  comment: string;
  date: string;
}

interface FooterCommentProperties {
  comments: Comment[];
  onAddComment: (comment: Comment) => void;
}
const CommentSection: FC<FooterCommentProperties> = ({
  comments,
  onAddComment,
}) => {
  const [newCommentText, setNewCommentText] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [handle, setHandle] = useState<string>("");
  const handleCommentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewCommentText(event.target.value);
  };

  const handleInputChange = (value: string) => {
    setNewCommentText(value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newComment: Comment = {
      id: Date.now(),
      comment: newCommentText,
      author: author || "anonymous",
      handle: handle || "unknown",
      date: new Date().toLocaleString(),
    };
    onAddComment(newComment);
    setNewCommentText("");
    setAuthor("");
    setHandle("");
  };

  return (
    <div className="w-396 border-2 border-solid bg-[var(--bg-popover)] px-4 py-2">
      <Comments comments={comments} />
      <Comments comments={comments} />
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
        <input
          type="text"
          value={newCommentText}
          onChange={handleCommentChange}
          placeholder="write a comment"
          className="border p-2"
        />
        <button type="submit" className="bg-[var(--accent)] p-2 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};
export default CommentSection;
