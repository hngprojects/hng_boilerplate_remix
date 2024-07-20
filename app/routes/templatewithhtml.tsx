import { getImages } from "~/lib/utils/utils";
import { useNavigate } from "@remix-run/react";
import { useState } from "react";

const Templatewithhtml = () => {
  const navigate = useNavigate();
  const [htmlLink, setHtmlLink] = useState(null);
  const [query, setQuery] = useState("");

  function handleNavigate(event: MouseEvent) {
    event.preventDefault();
    if (query === "") {
      console.log("Please fill out with");
      return;
    } else {
      // eslint-disable-next-line valid-typeof
      if (typeof window !== "undefined") {
        localStorage.setItem("query", query);
      }
      navigate(`/preview`);
    }
  }

  return (
    <>
      <div className="flex gap-6">
        <div className="max-w-52 bg-graystyles">
          need's someones else component for this part
        </div>
        <div className="flex flex-col gap-6 my-8">
          <ul className="flex gap-4">
            <li className="flex items-center gap-3">
              Email{" "}
              <span>
                <img
                  src={getImages[0].arrow_right.imgLocation}
                  alt="arrow right icon"
                />
              </span>
            </li>
            <li className="flex items-center gap-3">
              New Template
              <span>
                <img
                  src={getImages[0].arrow_right.imgLocation}
                  alt="arrow right icon"
                />
              </span>
            </li>
            <li className="flex items-center gap-3">Generate with HTML</li>
          </ul>
          <div>
            <h1 className="font-bold text-2xl">Generate Template with HTML</h1>
            <p className="text-base">
              Past your HTML code below to generate your email template.
            </p>
          </div>
          <form className="">
            <label htmlFor="input">HTML Link</label>
            <br />
            <input
              type="text"
              name=""
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              className="borderstyles py-2 px-4 w-80 focus:outline-0 mr-2"
              placeholder="Enter your link here"
            />
            <input
              type="submit"
              value="Generate"
              onClick={handleNavigate}
              className="borderstyles py-2 px-4 bg-orange text-white rounded"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Templatewithhtml;
