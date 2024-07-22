import React, { createContext, useContext, useState } from "react";

interface EditorContextType {
  blocks: string[];
  moveBlockUp: (index: number) => void;
  moveBlockDown: (index: number) => void;
  deleteBlock: (index: number) => void;
  copyBlock: (index: number) => void;
}

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children }) => {
  const [blocks, setBlocks] = useState<string[]>([
    // "Block1",
    // "Block2",
    // "Block3",
  ]);

  const [logo, setLogo] = useState<string | null>();
  const [fileInputKey, setFileInputKey] = useState<number>(0); // Key to force re-render of file input

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result as string); // Set the logo state with the file's data URL
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger file input click
  const handleClick = () => {
    setFileInputKey((previousKey) => previousKey + 1); // Change key to reset file input
    document.querySelector("#logo-upload-input");
  };

  const moveBlockUp = (index: number) => {
    if (index === 0) return;
    const newBlocks = [...blocks];
    [newBlocks[index - 1], newBlocks[index]] = [
      newBlocks[index],
      newBlocks[index - 1],
    ];
    setBlocks(newBlocks);
  };

  const moveBlockDown = (index: number) => {
    if (index === blocks.length - 1) return;
    const newBlocks = [...blocks];
    [newBlocks[index + 1], newBlocks[index]] = [
      newBlocks[index],
      newBlocks[index + 1],
    ];
    setBlocks(newBlocks);
  };

  const deleteBlock = (index: number) => {
    setBlocks(blocks.filter((_, index_) => index_ !== index));
  };

  const copyBlock = (index: number) => {
    const newBlocks = [...blocks];
    newBlocks.splice(index, 0, blocks[index]);
    setBlocks(newBlocks);
  };

  return (
    <EditorContext.Provider
      value={{ blocks, moveBlockUp, moveBlockDown, deleteBlock, copyBlock }}
    >
      {children}

      <div
        className={`flex w-full max-w-full flex-row flex-col items-center justify-center self-stretch px-10 pb-[7px] pt-10 text-left text-base text-gray-300`}
      >
        <div className="flex flex-row flex-wrap gap-[79px] self-stretch text-center text-5xl sm:max-w-[700px] md:max-w-full">
          <div className="rounded-10xs bg-neutral-colors-white border-darkorange box-border flex min-w-[228px] flex-1 flex-row items-center justify-center overflow-hidden border-[1px] border-[#F973168F] py-2 pl-[21px] pr-5 shadow-[0px_5px_22px_4px_rgba(0,_0,_0,_0.12)] md:w-[750px]">
            <div
              className="rounded-10xs box-border flex w-[228px] shrink-0 flex-row items-start justify-start overflow-hidden bg-[#E2E8F04D] px-[21px] py-[61px]"
              onClick={handleClick} // Attach the click handler
            >
              {logo ? (
                <img src={logo} alt="Logo" className="h-8 w-8" />
              ) : (
                <h2 className="font-inherit mq450:text-lgi relative m-0 flex-1 text-[25px] font-semibold">
                  Add your logo
                </h2>
              )}
              <input
                type="file"
                id="logo-upload-input"
                key={fileInputKey} // Use key to force re-render of input
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }} // Hide the file input
              />
            </div>
          </div>
          <div className="text-neutral-colors-dark-1 flex flex-row items-start justify-start gap-[16px] px-0 pb-[126px] pt-0 text-left text-sm">
            <div className="mt-2 box-border flex h-8 flex-col items-start justify-start gap-[10px] px-0 pb-0 pt-0">
              <div className="bg-aliceblue-100 box-border flex w-8 flex-row items-center justify-center rounded-md border-[1px] border-solid border-slate-200 px-[7px] py-1.5">
                <img
                  className="relative h-4 w-4 shrink-0 overflow-hidden"
                  alt="Icon"
                  src="/app/icon-9.svg"
                />
              </div>
              <div className="box-border flex w-8 flex-row items-center justify-center rounded-md border-[1px] border-solid border-slate-200 bg-white px-[7px] py-1.5">
                <img
                  className="relative h-4 w-4 shrink-0 overflow-hidden"
                  alt="Icon"
                  src="/app/icon-8.svg"
                />
              </div>

              <div className="box-border flex w-8 flex-row items-center justify-center rounded-md border-[1px] border-solid border-slate-200 bg-white py-1.5 pl-2 pr-1.5">
                <img
                  className="relative h-4 w-4 shrink-0 overflow-hidden"
                  alt="Icon"
                  src="/app/icon-10.svg"
                />
              </div>
              <div className="box-border flex w-8 flex-row items-center justify-center rounded-md border-[1px] border-solid border-slate-200 bg-white py-1.5 pl-2 pr-1.5">
                <img
                  className="relative h-4 w-4 shrink-0 overflow-hidden"
                  alt="Icon"
                  src="/app/icon-12.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-10xs my-20 box-border flex shrink-0 flex-row items-start items-center justify-start justify-center overflow-hidden bg-[#E2E8F04D] px-[21px] py-[61px] sm:mx-[20px] md:w-[508px]">
          <img
            className="relative flex h-[100px] w-[100px] shrink-0"
            alt="Icon"
            src="/app/icon.svg"
          />
        </div>
        <div className="mb-20 text-center text-[#0A0A0A] md:mx-[200px]">
          <h4 className="text-semibold text-[24px]">Welcome to Boilerplate!</h4>
          <p>Thanks for signing up</p>
        </div>
        <div className="rounded-10xs flex w-full flex-row items-start justify-center self-stretch overflow-hidden border-solid border-y-orange-600 bg-white py-20 pl-10 pr-[39px] shadow-lg md:max-w-full">
          <div className="flex max-w-full flex-1 flex-col items-center justify-center gap-[28px]">
            <div className="relative self-stretch whitespace-pre-wrap text-gray-600">
              We're thrilled to have you join us. Experience quality and
              innovation like never before. Our product is made to fit your
              needs and make your life easier.
            </div>
            <div className="flex max-w-full flex-col items-start justify-start gap-[20px] self-stretch text-gray-500">
              <div className="relative self-stretch font-semibold">
                Here’s what you can look forward to
              </div>
              <div className="flex max-w-full flex-col items-start justify-start gap-[16px] self-stretch">
                <div className="flex max-w-full flex-row flex-wrap items-center justify-start gap-[16px] self-stretch">
                  <img
                    className="relative h-6 w-6"
                    loading="lazy"
                    alt=""
                    src="/app/star-1.svg"
                  />
                  <div className="mq700:min-w-full relative inline-block min-w-[399px] max-w-full flex-1">
                    <span className="font-semibold">
                      Exclusive Offers:
                      <span className="leading-[24px]">{` `}</span>
                    </span>
                    <span className="text-gray-500">
                      Enjoy special promotions and discounts available only to
                      our members.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex max-w-full flex-col items-start justify-start gap-[16px] self-stretch">
                <div className="flex max-w-full flex-row flex-wrap items-center justify-start gap-[16px] self-stretch">
                  <img
                    className="relative h-6 w-6"
                    loading="lazy"
                    alt=""
                    src="/app/star-1.svg"
                  />
                  <div className="mq700:min-w-full relative inline-block min-w-[399px] max-w-full flex-1">
                    <span className="font-semibold">
                      Exclusive Offers:
                      <span className="leading-[24px]">{` `}</span>
                    </span>
                    <span className="text-gray-500">
                      Enjoy special promotions and discounts available only to
                      our members.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex max-w-full flex-col items-start justify-start gap-[16px] self-stretch">
                <div className="flex max-w-full flex-row flex-wrap items-center justify-start gap-[16px] self-stretch">
                  <img
                    className="relative h-6 w-6"
                    loading="lazy"
                    alt=""
                    src="/app/star-1.svg"
                  />
                  <div className="mq700:min-w-full relative inline-block min-w-[399px] max-w-full flex-1">
                    <span className="font-semibold">
                      Exclusive Offers:
                      <span className="leading-[24px]">{` `}</span>
                    </span>
                    <span className="text-gray-500">
                      Enjoy special promotions and discounts available only to
                      our members.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center self-stretch px-5 py-10">
          <button className="hover:bg-chocolate flex cursor-pointer flex-row items-start justify-start whitespace-nowrap rounded-lg bg-[#F97316] px-10 py-[12.5px] [border:none]">
            <div className="font-body-bold-small relative text-center text-base font-medium text-white">
              Learn More About Us
            </div>
          </button>
        </div>
      </div>
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context)
    throw new Error("useEditor must be used within an EditorProvider");
  return context;
};
