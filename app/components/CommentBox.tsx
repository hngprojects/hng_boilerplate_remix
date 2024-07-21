import {
  Forward,
  MessageCircle,
  Share2,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";

type CommentProperties = {
  userPicUrl: string;
  userDisplayName: string;
  userTagName: string;
  commentContent: string;
  pubDate: string;
  likeCount: number;
};

const CommentBox = ({
  userPicUrl,
  userDisplayName,
  userTagName,
  commentContent,
  pubDate,
  likeCount,
}: CommentProperties) => {
  return (
    <div className="flex w-full max-w-[54rem] items-start gap-[0.75rem] self-stretch rounded-[.5rem] border-[.8px] border-solid border-[#cbd5e1] bg-white px-[1rem] py-[1.2rem] lg:py-4">
      <img src={userPicUrl} alt="Profile Pic" className="h-10 w-10" />
      <div className="flex flex-col gap-[.88rem]">
        <div className="flex flex-col gap-[.25rem] lg:gap-[.38rem]">
          <h1 className="font-inter w-fit text-base font-semibold text-[#0a0a0a] lg:text-2xl">
            {userDisplayName}
          </h1>
          <p className="font-inter text-xs font-medium text-[#71717a] lg:text-sm">
            @{userTagName}
          </p>
        </div>
        <div className="comment-content font-inter w-full text-sm font-normal text-[#71717a] lg:text-base">
          {commentContent}
        </div>
        <div className="mt-[-.13rem] flex gap-3">
          <p className="font-inter text-xs font-normal text-[#525252]">
            {pubDate}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button className="like-btn flex items-center gap-1 rounded-[.24863rem] border-[.669px] border-solid border-[#cbd5e1] bg-[#fafafa] px-[.33rem] py-1">
            <ThumbsUp size={20} strokeWidth={1.5} color="#0A0A0A" />
            <p className="font-inter">{likeCount !== 0 && likeCount}</p>
          </button>
          <button className="dislike-btn flex items-center gap-1 rounded-[.24863rem] border-[.669px] border-solid border-[#cbd5e1] bg-[#fafafa] px-[.33rem] py-1">
            <ThumbsDown size={20} strokeWidth={1.4} color="#0A0A0A" />
          </button>
          <button className="share-btn flex items-center gap-1 rounded-[.24863rem] border-[.669px] border-solid border-[#cbd5e1] bg-[#fafafa] px-[.33rem] py-1">
            <Share2 size={20} strokeWidth={1.4} color="#0A0A0A" />
          </button>
          <button className="forward-btn flex items-center gap-1 rounded-[.24863rem] border-[.669px] border-solid border-[#cbd5e1] bg-[#fafafa] px-[.33rem] py-1">
            <Forward size={20} strokeWidth={1.4} color="#0A0A0A" />
          </button>
          <button className="reply-btn flex items-center gap-1 rounded-[.24863rem] border-[.669px] border-solid border-[#cbd5e1] bg-[#fafafa] px-[.33rem] py-1">
            <MessageCircle size={20} strokeWidth={1.4} color="#0A0A0A" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
