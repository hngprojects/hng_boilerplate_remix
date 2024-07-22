import { useNavigate } from "@remix-run/react";
import { useState } from "react";
import Button from "~/components/customButton/customButton";
import accordian from "../../public/icons/accordion.png";

const EditTemplate = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const [allowEdit, setAllow] = useState(false);
  const navigate = useNavigate();

  const [content, setContent] = useState(
    "Hi Chiviva it's been a long time...and we've missed you as much as you have missed us, This year, we are excited to introduce the first ever INBOUND hybrid experience including the return of our in-person event in Boston (safety first in compliance with all state and federal regulation and recomendations) and an upgraded online fully immersive experience. Passes are now on a sale, and you can learn about our pass types and on our registration page or read the summarry pass perks below. Finally the count down begins!",
  );

  const [BrandContent, setBrandHtml] = useState(
    "-Forever Yours, The INBOUND Team",
  );
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: any) => {
    setContent(e.target.value);
    setBrandHtml(e.target.value);
  };


  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <div className="mx-8 my-8 flex flex-col gap-6">
        <ul className="flex gap-4">
          <li className="flex items-center gap-3">
            Email
            <span>
              <img src={accordian} alt="arrow right icon" />
            </span>
          </li>
          <li
            className="flex cursor-pointer items-center gap-3"
            onClick={() => navigate("/admin/email")}
          >
            New Template
            <span>
              <img src={accordian} alt="arrow right icon" />
            </span>
          </li>
          <li
            className="flex cursor-pointer items-center gap-3"
            onClick={() => navigate("/admin/email/generate-html")}
          >
            Generate with HTML
          </li>
        </ul>
        <div>
          <h1 className="text-2xl font-bold">
            Preview Your Generated Template
          </h1>
          <div className="flex gap-8">
            <p className="reviewLayout text-base">
              Review the layout and look of your email template generated
              generated from the pasted HTML code to ensure you have pasted the
              right template.
            </p>
            <div>
              <button
                onClick={toggleEdit}
                className="text-nowrap rounded-xl bg-black px-3 py-2 text-white"
              >
                Edit Content
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-lg border border-solid border-border bg-background p-4">
          <div className="flex h-5/6 w-11/12 items-center justify-center rounded-lg border border-solid border-border bg-white py-12">
            <ul className="p4 flex w-7/12 flex-col items-center justify-center rounded-lg border p-6 leading-7">
              <li>
                {isEditing ? (
                  <div>
                    <input
                      type="text"
                      value={content}
                      onChange={handleChange}
                      className="w-fit outline-none "
                    />
                    <Button className="ml-6 bg-slate-200" onClick={toggleEdit}>Save</Button>
                  </div>
                ) : (
                  <div>
                    <p>{content}</p>
                    <br />
                    <br />
                    <p>{BrandContent}</p>
                  </div>
                )}
                <br />
                <br />
              </li>
                <Button className="w-32 font-bold text-background ">
                  Register Here
                </Button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTemplate;
