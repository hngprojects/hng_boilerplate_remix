import { FC, useState } from "react";

import Comments from "./Comments";
import { Button } from "../../components/ui/button";

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
    <div className="py-4 px-8">
      <Comments comments={comments} />
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
        <input
          type="text"
          value={newCommentText}
          onChange={handleCommentChange}
          placeholder="Write a comment..."
          className="border p-4 w-full md:w-3/6 rounded-md"
        />
        <Button type="submit" className="bg-primary p-2 text-white w-1/6 ">
         Comment
        </Button>
      </form>
    </div>
  );
};

export default CommentSection;
