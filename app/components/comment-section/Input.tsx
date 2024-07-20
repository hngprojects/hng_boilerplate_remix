import { ChangeEvent, useState } from "react";
import "../ui/index.css";
import { Button } from "../ui/button";
import icon from "../../../public/Ellipse 2.svg";

interface TextInputProps {
  value: string;
  onChange: (newValue: string) => void;
}

export default function Input({ value, onChange }: TextInputProps) {
  const [newComment, setNewComment] = useState<string>("");
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
    <div className="w-382px px-3 py-2 border-1 border-solid border-[var(--neutral)]">
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
      </div>
    </div>
  );
}
