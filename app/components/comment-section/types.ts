export interface Comment {
  id: number;
  username?: string;
  comment: string;
  handle: any;
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
