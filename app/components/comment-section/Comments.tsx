import { FC } from "react";
import "../../styles/global.css";

import icon5 from "../../../public/back.svg";
import icon6 from "../../../public/comment.svg";
import icon1 from "../../../public/Ellipse 2.svg";
import icon3 from "../../../public/notOk.svg";
import icon2 from "../../../public/ok.svg";
import icon4 from "../../../public/share.svg";
import { Comment } from "./types";

interface FooterCommentProperties {
  comments: Comment[];
}
const Comments: FC<FooterCommentProperties> = ({ comments }) => {
  return (
    <div className="lg:full w-full border-2 border-solid bg-[var(--popover)] md:w-1/2">
      <div className="px-2">
        <h4 className="w-full self-stretch text-xl font-medium leading-normal">
          Comments
        </h4>
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex-basis-0 my-4 flex flex-grow flex-col items-start border-2 border-solid px-8 py-2"
          >
            <div className="bg-[var(--popover)]">
              <div className="flex gap-1">
                <img src={icon1} alt="icon" />
                <div className="text-sm md:text-xl lg:text-3xl">
                  <strong className="text-[var(--neutral-1)]dark md:text-xl lg:text-3xl">
                    {comment.author}
                  </strong>
                  <p className="lg:text-3xlfont-medium my-0 text-sm leading-normal text-[var(--neutral-2)] md:text-xl">
                    {comment.handle}
                  </p>
                </div>
              </div>
              <p className="text-[var(--muted-foreground)]text-14 px-4 py-4 font-normal leading-normal md:text-xl lg:text-3xl">
                {comment.comment}
              </p>
              <span className="text-[var(--neutral-1)]">{comment.date}</span>
              <div className="inline-flex gap-3 md:text-xl lg:text-3xl">
                <>
                  <img
                    src={icon2}
                    alt="icon"
                    className="border-2 border-solid p-1"
                  />
                  <img
                    src={icon3}
                    alt="icon"
                    className="border-2 border-solid p-1"
                  />
                </>
                <img
                  src={icon4}
                  alt="icon"
                  className="border-2 border-solid p-1"
                />
                <img
                  src={icon5}
                  alt="icon"
                  className="border-2 border-solid p-1"
                />
                <img
                  src={icon6}
                  alt="icon"
                  className="border-2 border-solid p-1"
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
