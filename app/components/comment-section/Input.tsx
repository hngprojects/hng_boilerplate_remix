
import { ChangeEvent, useState, useEffect } from "react";
import "../ui/index.css";
import { Button } from "../ui/button";
import icon from "../../../public/Ellipse 2.svg";

interface TextInputProps {
  value: string;
  onChange: (newValue: string) => void;
}

interface Comment {
  id: number;
  username: string;
  image: string;
  handle: string;
  comment: string;
  timestamp: number;
}

export default function Input({ value, onChange }: TextInputProps) {
  const [newComment, setNewComment] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
   fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Error fetching comments:", error));
  }, []);

  const addComment = (newComment) => {
    const newCommentObj = {
      id: Date.now(),
      username: `${newComment.name}`,
      image: icon,
      currentUser: `${newComment.email}`,
      comment: `${newComment.body}`,
      timestamp: Date.now(),
    };
    return newCommentObj;
  };

  const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newCommentText = newComment.trim();
    if (newCommentText) {
      const newCommentObj = addComment({ name: "Username", email: "user@example.com", text: newCommentText });
      setComments((prevComments) => [...prevComments, newCommentObj]);
      setNewComment("");
    }
  };

  const handleCommentChange = (comment: string) => {
    setNewComment(comment);
  };

  const handleSubmit = () => {
    onChange(newComment);
    setNewComment("");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleCommentChange(event.target.value);
  };

  return (
    <div className="w-300  w-full md:w-1/2 lg:full px-3 py-2 border-1 border-solid border-[var(--neutral)]">
      <div className="flex gap-2">
        <img src={icon} alt="icon" />
        <input
          value={newComment}
          onChange={handleInputChange}
          type="text"
          id="comments"
          placeholder="Type your comments here"
          className="w-366px placeholder-opacity-50 py-2 px-6 border-2 border-solid border-[var(--accent)]"
        />
        <Button className="bg-[var(--accent)] w-20" onClick={handleCommentSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}


