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
        <div className="w-full text-[#71717a] text-sm lg:text-base font-normal font-inter">
          {commentContent}
        </div>
        <div className="flex gap-3 mt-[-.13rem]">
          <p className="text-[#525252] text-xs font-normal font-inter">
            {pubDate}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button className="like-btn flex gap-1 items-center rounded-[.24863rem] border-solid border-[.669px] border-[#cbd5e1] bg-[#fafafa] py-1 px-[.33rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M7.87598 10.0164V21.9172"
                stroke="#0A0A0A"
                stroke-width="1.98347"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.8098 5.93045L14.8181 10.0164H20.5999C20.9078 10.0164 21.2115 10.0881 21.4869 10.2258C21.7623 10.3635 22.0019 10.5635 22.1867 10.8098C22.3714 11.0561 22.4963 11.3421 22.5514 11.6451C22.6064 11.948 22.5902 12.2596 22.504 12.5552L20.1933 20.4891C20.0731 20.9011 19.8226 21.263 19.4792 21.5205C19.1359 21.778 18.7183 21.9172 18.2891 21.9172H4.90071C4.37466 21.9172 3.87015 21.7083 3.49818 21.3363C3.12621 20.9643 2.91724 20.4598 2.91724 19.9338V11.9999C2.91724 11.4738 3.12621 10.9693 3.49818 10.5973C3.87015 10.2254 4.37466 10.0164 4.90071 10.0164H7.6379C8.00691 10.0162 8.36854 9.91308 8.68215 9.71861C8.99576 9.52413 9.2489 9.24604 9.4131 8.91558L12.8346 2.08252C13.3023 2.08831 13.7626 2.19971 14.1812 2.4084C14.5998 2.61709 14.9658 2.91767 15.2519 3.28768C15.5379 3.65769 15.7367 4.08757 15.8333 4.5452C15.93 5.00283 15.9219 5.47637 15.8098 5.93045Z"
                stroke="#0A0A0A"
                stroke-width="1.98347"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="font-inter">{likeCount !== 0 && likeCount}</p>
          </button>
          <button className="dislike-btn flex gap-1 items-center rounded-[.24863rem] border-solid border-[.669px] border-[#cbd5e1] bg-[#fafafa] py-1 px-[.33rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M17.6694 14V2"
                stroke="#525252"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.66936 18.12L10.6694 14H4.83936C4.52887 14 4.22264 13.9277 3.94493 13.7889C3.66722 13.65 3.42565 13.4484 3.23936 13.2C3.05306 12.9516 2.92716 12.6633 2.87162 12.3578C2.81607 12.0523 2.83242 11.7381 2.91936 11.44L5.24936 3.44C5.37052 3.02457 5.62316 2.65964 5.96936 2.4C6.31555 2.14036 6.73661 2 7.16936 2H20.6694C21.1998 2 21.7085 2.21071 22.0836 2.58579C22.4586 2.96086 22.6694 3.46957 22.6694 4V12C22.6694 12.5304 22.4586 13.0391 22.0836 13.4142C21.7085 13.7893 21.1998 14 20.6694 14H17.9094C17.5373 14.0002 17.1726 14.1042 16.8564 14.3003C16.5402 14.4964 16.2849 14.7768 16.1194 15.11L12.6694 22C12.1978 21.9942 11.7336 21.8818 11.3116 21.6714C10.8895 21.461 10.5204 21.1579 10.232 20.7848C9.94347 20.4117 9.74304 19.9782 9.64562 19.5168C9.5482 19.0554 9.55631 18.5779 9.66936 18.12Z"
                stroke="#525252"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="share-btn flex gap-1 items-center rounded-[.24863rem] border-solid border-[.669px] border-[#cbd5e1] bg-[#fafafa] py-1 px-[.33rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M8.66943 6C8.66943 4.34315 7.32629 3 5.66943 3C4.01258 3 2.66943 4.34315 2.66943 6C2.66943 7.65685 4.01258 9 5.66943 9C7.32629 9 8.66943 7.65685 8.66943 6Z"
                stroke="#525252"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.6694 18C15.6694 16.3431 14.3263 15 12.6694 15C11.0126 15 9.66943 16.3431 9.66943 18C9.66943 19.6569 11.0126 21 12.6694 21C14.3263 21 15.6694 19.6569 15.6694 18Z"
                stroke="#525252"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.6694 6C22.6694 4.34315 21.3263 3 19.6694 3C18.0126 3 16.6694 4.34315 16.6694 6C16.6694 7.65685 18.0126 9 19.6694 9C21.3263 9 22.6694 7.65685 22.6694 6Z"
                stroke="#525252"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.1792 15.4099L18.1592 8.57991"
                stroke="#525252"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.1792 8.58991L11.1592 15.4099"
                stroke="#525252"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="forward-btn flex gap-1 items-center rounded-[.24863rem] border-solid border-[.669px] border-[#cbd5e1] bg-[#fafafa] py-1 px-[.33rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M15.6694 17L20.6694 12L15.6694 7"
                stroke="#525252"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.66943 18V16C4.66943 14.9391 5.09086 13.9217 5.84101 13.1716C6.59115 12.4214 7.60857 12 8.66943 12H20.6694"
                stroke="#525252"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="reply-btn flex gap-1 items-center rounded-[.24863rem] border-solid border-[.669px] border-[#cbd5e1] bg-[#fafafa] py-1 px-[.33rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M12.1695 3C13.4893 2.99656 14.7913 3.30493 15.9695 3.9C17.3812 4.60557 18.5686 5.69025 19.3987 7.03255C20.2288 8.37485 20.6689 9.92176 20.6695 11.5C20.6729 12.8199 20.3645 14.1219 19.7695 15.3L21.6695 21L15.9695 19.1C14.7913 19.6951 13.4893 20.0034 12.1695 20C10.5912 19.9994 9.04431 19.5594 7.70201 18.7293C6.35971 17.8992 5.27503 16.7117 4.56946 15.3C3.97439 14.1219 3.66602 12.8199 3.66946 11.5V11C3.78445 8.91565 4.66422 6.94696 6.14032 5.47086C7.61642 3.99476 9.58511 3.11499 11.6695 3H12.1695Z"
                stroke="#525252"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
