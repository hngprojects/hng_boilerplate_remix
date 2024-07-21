import clsx from "clsx";
import { ChangeEvent, useState } from "react";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { handleImageUpload } from "./handleImageUpload";

export function UploadPicture() {
  const [backgroundImage, setBackgroundImage] = useState<
    string | null | undefined
  >();
  return (
    <div className="mb-3 flex items-center gap-1.5">
      <div
        className={clsx(
          "image h-[59px] w-[59px] rounded-full bg-gray-500 bg-cover bg-center bg-no-repeat",
          {
            "image-background": backgroundImage,
          },
        )}
        style={
          backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
        }
      ></div>
      <div className="flex flex-col gap-1">
        <Label>Upload Picture</Label>
        <Label
          htmlFor="picture"
          className="cursor-pointer text-xs text-orange-500"
        >
          Click to Upload
        </Label>
        <Input
          id="picture"
          type="file"
          accept="image/*"
          hidden
          className="hidden"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleImageUpload(event, setBackgroundImage)
          }
        />
      </div>
    </div>
  );
}
