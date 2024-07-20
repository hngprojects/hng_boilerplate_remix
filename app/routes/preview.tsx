import { getImages } from "~/lib/utils/utils";
import { useState, useEffect } from "react";
import Navbar from "~/Components/Navbar/Navbar";
function Preview() {
  const [htmlContent, setHtmlContent] = useState("");
  const [allowEdit, setAllow] = useState(false);
  const [htmlLink, setHtmlLink] = useState(localStorage.getItem("query"));

  // if()

  useEffect(()=> {
    const fetchfile = async () => {
      if(!htmlLink){
        return 
      }
      try {
        
        const res = await fetch(`${htmlLink}`);
        // https://res.cloudinary.com/dbx3hnvcf/raw/upload/v1721483612/index_ox46if.html
        const template = await res.text();
        setHtmlContent(template);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchfile()
  },[htmlLink?.length
  ])


  return (
    <>
     <div className="flex flex-col gap-6 mt-3 mx-56">
          <ul className="flex gap-4 text-nowrap">
            <li className="flex items-center gap-3">
              Choose starting point
              <span>
                <img
                  src={getImages[0].arrow_right.imgLocation}
                  alt="arrow right icon"
                />
              </span>
            </li>
            <li className="flex items-center gap-3">
              Generate with html
              <span>
                <img
                  src={getImages[0].arrow_right.imgLocation}
                  alt="arrow right icon"
                />
              </span>
            </li>
            <li className="flex items-center text-textgray gap-3">
             Preview Template
            </li>
          </ul>
        </div>

      <Navbar />
    <div className="flex gap-8">
      <div className="max-w-52 left bg-graystyles">
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
          <h1 className="font-bold text-2xl">
            Preview your generated template
          </h1>
          <div className="flex gap-8">
            <p className="text-base reviewLayout">
              Review the layout and look of your email template generated
              generated from the pasted HTML code to ensure you have pasted the
              right template.
            </p>
            <div>
              <button
                onClick={() => setAllow(!allowEdit)}
                className="bg-black text-white px-3 py-2 text-nowrap rounded-xl"
              >
                Edit Content
              </button>
            </div>
          </div>
        </div>
        <div className="w-full boderstyles">
          <div
            contentEditable={allowEdit}
            // onInput={handleContentChange}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </div>
    </>
  );
}

export default Preview;
