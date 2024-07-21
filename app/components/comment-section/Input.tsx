import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

import { Comment, NewCommentInput } from "./types";

import "../ui/index.css";

import icon from "../../../public/Ellipse 2.svg";
import { Button } from "../ui/button";

interface TextInputProperties {
  value: string;
  onChange: (newValue: string) => void;
}

export default function Input({ value, onChange }: TextInputProperties) {
  const [newComment, setNewComment] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Error fetching comments:", error));
  }, []);

  const addComment = (newComment: NewCommentInput): Comment => {
    const newCommentObject: Comment = {
      id: Date.now(),
      username: newComment.name,
      image: icon,
      handle: newComment.email,
      comment: newComment.text,
      timestamp: Date.now(),
      className: "",
    };
    return newCommentObject;
  };

  const handleCommentSubmit = (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newCommentText = newComment.trim();
    if (newCommentText) {
      const newCommentObject = addComment({
        name: "Username",
        email: "user@example.com",
        text: newCommentText,
      });
      setComments((previousComments) => [
        ...previousComments,
        newCommentObject,
      ]);
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
    <div className="w-300 lg:full border-1 w-full border-solid border-[var(--neutral)] px-3 py-2 md:w-1/2">
      <div className="flex gap-2">
        <img src={icon} alt="icon" />
        <input
          value={newComment}
          onChange={handleInputChange}
          type="text"
          id="comments"
          placeholder="Type your comments here"
          className="w-366px border-2 border-solid border-[var(--accent)] px-6 py-2 placeholder-opacity-50"
        />
        <Button
          className="w-20 bg-[var(--accent)]"
          onClick={handleCommentSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
