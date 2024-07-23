import React, { useRef } from "react";

import Heading from "./Heading";

interface Properties {
  image: string;
}

function validateFileType(file: string) {
  const fileTypes: string[] = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
  ];

  return fileTypes.includes(file);
}

function Photo({ image }: Properties) {
  const fileInputReference = useRef<HTMLInputElement>(null);

  function handleClick() {
    fileInputReference.current?.click();
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.currentTarget.files;

    if (files && files.length > 0) {
      const file = files[0];

      if (!validateFileType(file.type))
        return window.alert("Invalid file type. File must be an image");

      window.alert("image upload success");
      // file upload to server and other logic
    }
  }

  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <Heading>your photo</Heading>
      <div className="flex items-center justify-between gap-4">
        <img
          src={image || "/images/dummy-profile.png"}
          alt="user-photo"
          className="h-[108px] w-[108px] rounded-full border-[1px] border-dashed border-border object-cover"
        />
        <div className="flex flex-col items-start justify-between gap-4">
          <button
            className="foucus:outline-none p-0 font-semibold leading-[19px] text-[#f97316]"
            onClick={handleClick}
          >
            Upload your photo
          </button>
          <input
            type="file"
            ref={fileInputReference}
            hidden // Hide the file input element
            onChange={handleFileChange}
          />
          <p className="text-sm font-normal leading-[17px] text-[#525252]">
            Photos help your teammates recognize you
          </p>
        </div>
      </div>
    </div>
  );
}

export default Photo;
