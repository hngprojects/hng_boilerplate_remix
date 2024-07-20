import { FC, useState } from "react";
import Input from "./Input";
import "../ui/index.css";
import icon1 from "../../../public/Ellipse 2.svg";
import icon2 from "../../../public/ok.svg";
import icon3 from "../../../public/notOk.svg";
import icon4 from "../../../public/share.svg";
import icon5 from "../../../public/back.svg";
import icon6 from "../../../public/comment.svg";
import { Button } from "../ui/button";
import Comments from "./Comments";

interface Comment {
  id: number;
  text: string;
  handle: any;
  author: string;
  date: string;
}

interface FooterCommentProps {
  comments: Comment[];
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
    <div className=" border-2 border-solid  w-396 bg-[var(--bg-popover)]">
     <Comments comments={comments}/>
     <Comments comments={comments} />
      <div className="flex items-start flex-col flex-grow flex-basis-0">
        <Input value={newComment} onChange={handleInputChange} />
        <Button className="bg-[var(--accent)]">Submit</Button>
      </div>
    </div>
  );
};
export default CommentSection;
