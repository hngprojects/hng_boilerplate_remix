import { useState } from "react";

import Form from "./Form";
import Photo from "./Photo";

function ProfileSetting() {
  const [image] = useState("");

  return (
    <main className="mx-auto flex flex-col gap-4">
      <Photo image={image} />
      <Form image={image} />
    </main>
  );
}

export default ProfileSetting;
