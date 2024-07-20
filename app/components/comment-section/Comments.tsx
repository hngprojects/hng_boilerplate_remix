import { FC, useState } from "react";
import "../ui/index.css";
import icon1 from "../../../public/Ellipse 2.svg";
import icon2 from "../../../public/ok.svg";
import icon3 from "../../../public/notOk.svg";
import icon4 from "../../../public/share.svg";
import icon5 from "../../../public/back.svg";
import icon6 from "../../../public/comment.svg";
import { Button } from "../ui/button";

interface Comment {
  id: number;
  text: string;
  handle: any;
  author: string;
  date: string;
  
}

interface FooterCommentProps {
  comments: Comment[];

}
const Comments: FC<FooterCommentProps> = ({ comments,}) => {
 
  return (
    <div className=" border-2 border-solid  w-396 bg-[var(--bg-popover)]">
      <div className="px-2">
        <h4 className="text-xl font-medium leading-normal self-stretch w-full">
          Comments
        </h4>
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex items-start flex-col flex-grow flex-basis-0 py-2 px-8 my-4 border-2 border-solid "
          >
            <div className="bg-[var(--popover)] ">
              <div className="flex gap-1">
                <img src={icon1} alt="icon" />
                <div>
                  <strong className="text-var(--text-dark)]">
                    {comment.author}
                  </strong>
                  <p className="text-[var(--neutral)] text-sm font-medium leading-normal my-0">
                    {comment.handle}
                  </p>
                </div>
              </div>
              <p className="text-[var(--text-primary)]text-14 font-normal leading-normal py-4 px-4">
                {comment.text}
              </p>
              <span className="text-[var(--neutral)]">{comment.date}</span>
              <div className="inline-flex gap-3">
                <>
                  <img
                    src={icon2}
                    alt="icon"
                    className="border-2 border-solid p-1 relative"
                  />
                  <span className="static left-5 text-10 ">20</span>
                </>
                <img
                  src={icon4}
                  alt="icon"
                  className="border-2 border-solid p-1 "
                />
                <img
                  src={icon5}
                  alt="icon"
                  className="border-2 border-solid p-1 "
                />
                <img
                  src={icon6}
                  alt="icon"
                  className="border-2 border-solid p-1 "
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Comments;
