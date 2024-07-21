import classes from "./CommentBox.module.css";

type CommentProps = {
  userPicUrl: string;
  userDisplayName: string;
  userTagName: string;
  commentContent: string;
  pubDate: string;
  likeCount: number;
  // setLikeCount: (like: number) => number;
};

const CommentBox = ({
  userPicUrl,
  userDisplayName,
  userTagName,
  commentContent,
  pubDate,
  likeCount,
}: // setLikeCount,
CommentProps) => {
  return (
    <div className="w-full max-w-[54rem] bg-white flex items-start gap-[0.75rem] self-stretch rounded-[.5rem] border-solid border-[.8px] border-[#cbd5e1] py-[1.2rem] lg:py-4 px-[1rem]">
      <img src={userPicUrl} alt="Profile Pic" className="w-10 h-10" />
      <div className="flex flex-col gap-[.88rem]">
        <div className="flex flex-col gap-[.25rem] lg:gap-[.38rem]">
          <h1 className="w-fit text-[#0a0a0a] text-base lg:text-2xl font-semibold font-inter">
            {userDisplayName}
          </h1>
          <p className="text-[#71717a] text-xs lg:text-sm font-medium font-inter">
            @{userTagName}
          </p>
        </div>
        <div className="comment-content w-full text-[#71717a] text-sm lg:text-base font-normal font-inter">
          {commentContent}
        </div>
        <div className="flex gap-3 mt-[-.13rem]">
          <p className="text-[#525252] text-xs font-normal font-inter">
            {pubDate}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button className="like-btn flex gap-1 items-center rounded-[.24863rem] border-solid border-[.669px] border-[#cbd5e1] bg-[#fafafa] py-1 px-[.33rem]">
            <img src="../../public/images/comment-like-icon.svg" alt="like" />
            <p className="font-inter">{likeCount !== 0 && likeCount}</p>
          </button>
          <button className="dislike-btn flex gap-1 items-center rounded-[.24863rem] border-solid border-[.669px] border-[#cbd5e1] bg-[#fafafa] py-1 px-[.33rem]">
            <img src="../../public/images/comment-dislike-icon.svg" alt="dislike" />
          </button>
          <button className="share-btn flex gap-1 items-center rounded-[.24863rem] border-solid border-[.669px] border-[#cbd5e1] bg-[#fafafa] py-1 px-[.33rem]">
            <img src="../../public/images/comment-share-icon.svg" alt="share" />
          </button>
          <button className="forward-btn flex gap-1 items-center rounded-[.24863rem] border-solid border-[.669px] border-[#cbd5e1] bg-[#fafafa] py-1 px-[.33rem]">
            <img src="../../public/images/comment-forward-icon.svg" alt="forward" />
          </button>
          <button className="reply-btn flex gap-1 items-center rounded-[.24863rem] border-solid border-[.669px] border-[#cbd5e1] bg-[#fafafa] py-1 px-[.33rem]">
            <img src="../../public/images/comment-reply-icon.svg" alt="reply" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
