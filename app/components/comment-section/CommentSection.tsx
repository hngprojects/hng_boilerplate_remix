import { FC, useState } from "react";
import Input from "./Input";
import "../ui/index.css";

import { Button } from "../ui/button";
import Comments from "./Comments";



interface FooterCommentProps {
 comments:string;
  onAddComment: (comment: string) => void;
}
const CommentSection: FC<FooterCommentProps> = ({ comments, onAddComment }) => {
  const [newComment, setNewComment] = useState<string>("");
  const handleInputChange = (value: string) => {
    setNewComment(value);
  };
  const handleSubmit = () => {
    onAddComment(newComment);
    setNewComment("");
  };
  return (
    <div className=" border-2 border-solid  w-396 px-4 py-2 bg-[var(--bg-popover)]">
     <Comments comments={comments}/>
     <Comments comments={comments}/>
      <div className="flex items-start flex-col flex-grow flex-basis-0">
        <Input value={newComment} onChange={handleInputChange} />
      </div>
    </div>
  );
};
export default CommentSection;
