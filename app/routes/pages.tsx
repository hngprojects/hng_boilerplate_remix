import CommentBox from "~/components/CommentBox";

const commentData: {
  userPicUrl: string;
  userDisplayName: string;
  userTagName: string;
  commentContent: string;
  likeCount: number;
  pubDate: string;
} = {
  userPicUrl: "../public/images/comment-user-pic.svg",
  userDisplayName: "Uduak Essien",
  userTagName: "Uduess",
  commentContent:
    "Living a balanced lifestyle is essential. Focus on healthy eating, regular exercise, and mental well-being. A well-rounded lifestyle leads to a happier, more fulfilling life. Embrace positive habits and enjoy the journey.",
  pubDate: `02 Jan, 2020 Wed 02:30pm`,
  likeCount: 20,
};

const Pages = () => {
  return (
    <div className="p-2">
      <CommentBox
        userPicUrl={commentData.userPicUrl}
        userDisplayName={commentData.userDisplayName}
        userTagName={commentData.userTagName}
        commentContent={commentData.commentContent}
        pubDate={commentData.pubDate}
        likeCount={commentData.likeCount}
      />
    </div>
  );
};

export default Pages;
