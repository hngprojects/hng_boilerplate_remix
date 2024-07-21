export interface Comment {
  id: number;
  username?: string;
  comment: string;
  handle: string;
  author?: string;
  date?: string;
  className?: string;
  timestamp?: number;
  image?: string;
}
export interface NewCommentInput {
  name: string;
  email: string;
  text: string;
}
