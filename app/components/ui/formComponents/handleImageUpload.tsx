import { ChangeEvent } from "react";

export const handleImageUpload = (
  event: ChangeEvent<HTMLInputElement>,
  setBackgroundImage: (image: string | null) => void,
) => {
  const file = event.target.files?.[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setBackgroundImage(reader.result as string);
    });
    reader.readAsDataURL(file);
  }
};
