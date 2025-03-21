// Define the User interface
export interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
  isUser: boolean;
  isGuest: boolean;
  role: string;
}

// Demo users data
export const users: User[] = [
  {
    id: 1,
    name: "john doe",
    email: "johndoe@gmail.test",
    isAdmin: true,
    isUser: false,
    isGuest: false,
    role: "members",
  },
  {
    id: 2,
    name: "tester",
    email: "johndoe@gmail.test",
    isAdmin: false,
    isUser: true,
    isGuest: false,
    role: "suspended",
  },
  {
    id: 3,
    name: "rest2",
    email: "rohndoe@gmail.test",
    isAdmin: false,
    isUser: true,
    isGuest: false,
    role: "left workspace",
  },
];
