import React from "react";
import { it, expect, describe } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import CommentBox from "../../app/components/CommentBox";

describe("Comment Box Component", () => {
  it("Should Render CommentBox As in Design When all props are provided", () => {
    render(
      <CommentBox
        userPicUrl="../public/user-profile-pic.png"
        userDisplayName="Uduak Essien"
        userTagName="Uduess"
        commentContent="The Content of the Comment made by the user"
        pubDate="02 Jan, 2020 Wed 02:30pm"
        likeCount={20}
      />
    );

    const userProfile = screen.getByRole("img");
    expect(userProfile).toBeInTheDocument();

    const userDisplayName = screen.getByRole("heading");
    expect(userDisplayName).toBeInTheDocument();
  });
});
