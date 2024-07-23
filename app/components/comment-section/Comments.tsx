import { FC } from "react";

import back from "../../../public/back.svg";
import commentIcon from "../../../public/comment.svg";
import userIcon from "../../../public/Ellipse 2.svg";
import notOk from "../../../public/notOk.svg";
import ok from "../../../public/ok.svg";
import share from "../../../public/share.svg";
import { Comment } from "./types";

interface FooterCommentProperties {
  comments: Comment[];
}
const Comments: FC<FooterCommentProperties> = ({ comments }) => {
  return (
    <div className="lg:full w-full rounded border-2 border-solid bg-popover md:w-1/2">
      <div className="px-2">
        <h4 className="w-full self-stretch text-xl font-medium leading-normal">
          Comments
        </h4>
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex-basis-0 my-4 flex flex-grow flex-col items-start rounded-md border-2 border-solid px-8 py-2"
          >
            <div className="bg-popover">
              <div className="flex gap-1">
                <img src={userIcon} alt="icon" />
                <div className="text-sm md:text-xl lg:text-3xl">
                  <strong className="dark:text-neutral-1 md:text-xl lg:text-3xl">
                    {comment.author}
                  </strong>
                  <p className="my-0 text-sm font-medium leading-normal text-neutral-2 md:text-xl lg:text-3xl">
                    {comment.handle}
                  </p>
                </div>
              </div>
              <p className="text-14 px-4 py-4 font-normal leading-normal text-muted-foreground md:text-xl lg:text-3xl">
                {comment.comment}
              </p>
              <span className="text-[var(--neutral-1)]">{comment.date}</span>
              <div className="inline-flex gap-3 md:text-xl lg:text-3xl">
                <>
                  <img
                    src={ok}
                    alt="icon"
                    className="border-2 border-solid p-1"
                  />
                  <img
                    src={notOk}
                    alt="icon"
                    className="border-2 border-solid p-1"
                  />
                </>
                <img
                  src={share}
                  alt="icon"
                  className="border-2 border-solid p-1"
                />
                <img
                  src={back}
                  alt="icon"
                  className="border-2 border-solid p-1"
                />
                <img
                  src={commentIcon}
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
