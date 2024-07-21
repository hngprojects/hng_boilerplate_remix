import { FC, useState } from "react";

import Comments from "./Comments";

interface Comment {
  id: number;
  comment: string;
  author: string;
  handle: string;
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

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCommentText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newComment: Comment = {
      id: Date.now(),
      comment: newCommentText,
      author: author || "Anonymous",
      handle: handle || "@unknown",
      date: new Date().toLocaleString(),
    };

    onAddComment(newComment);
    setNewCommentText("");
    setAuthor("");
    setHandle("");
  };

  return (
    <div>
      <Comments comments={comments} />
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
        <input
          type="text"
          value={newCommentText}
          onChange={handleCommentChange}
          placeholder="Write a comment..."
          className="border p-2"
        />
        <button type="submit" className="bg-[var(--accent)] p-2 text-white">
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
