interface TemplateListItemProp {
  templateImage: string;
  templateName: string;
  isPreviewActive: boolean;
  onPreview: () => void;
}

export default function TemplateListItem({
  templateImage,
  templateName,
  isPreviewActive,
  onPreview,
}: TemplateListItemProp) {
  return (
    // <div className="py-[2rem] pr-[4rem] pl-[2.4rem] flex items-center border-b-[1px] w-[max-content] border-[rgba(203, 213, 225, 0.40)]">
    //   <div className="w-[102px]">
    //     <img
    //       src={templateImage}
    //       alt="template preview"
    //       width="100%"
    //       height="auto"
    //     />
    //   </div>
    //   <p className="text-[#525252] w-[334px] mx-[21px]">{templateName}</p>
    //   <div className="flex gap-x-[32px]">
    //     <button
    //       className={`${
    //         isPreviewActive ? "text-[#F97316]" : "text-black"
    //       } text-[16px]`}
    //       onClick={onPreview}
    //     >
    //       Preview
    //     </button>
    //     <p className="text-[16px]">Edit</p>
    //   </div>
    // </div>
    // <div className="py-8 pr-16 pl-10 flex items-center border-b border-gray-300 w-full max-w-full md:max-w-3xl">
    //   <div className="w-24 md:w-32 flex-shrink-0">
    //     <img
    //       src={templateImage}
    //       alt="template preview"
    //       className="w-full h-auto"
    //     />
    //   </div>
    //   <p className="text-gray-700 flex-1 mx-5 md:mx-8 truncate">
    //     {templateName}
    //   </p>
    //   <div className="flex gap-x-8">
    //     <button
    //       className={`${
    //         isPreviewActive ? "text-orange-500" : "text-black"
    //       } text-base`}
    //       onClick={onPreview}
    //     >
    //       Preview
    //     </button>
    //     <p className="text-base">Edit</p>
    //   </div>
    // </div>
    // <div className="py-8 pr-16 pl-10 flex flex-wrap items-center border-b border-gray-300 w-full max-w-full md:max-w-3xl">
    //   <div className="w-24 md:w-32 flex-shrink-0">
    //     <img
    //       src={templateImage}
    //       alt="template preview"
    //       className="w-full h-auto"
    //     />
    //   </div>
    //   <p className="text-gray-700 mx-5 md:mx-8 flex-1">{templateName}</p>
    //   <div className="flex gap-x-8 mt-4 md:mt-0">
    //     <button
    //       className={`${
    //         isPreviewActive ? "text-orange-500" : "text-black"
    //       } text-base`}
    //       onClick={onPreview}
    //     >
    //       Preview
    //     </button>
    //     <p className="text-base">Edit</p>
    //   </div>
    // </div>
    <div className="py-4 md:py-8  pr-8 md:pr-16 pl-4 md:pl-10 flex items-center border-b border-gray-300 w-full max-w-full md:max-w-3xl">
      <div className="w-8 sm:w-24 md:w-32 flex-shrink-0">
        <img
          src={templateImage}
          alt="template preview"
          className="w-full h-auto"
        />
      </div>
      <p className="text-gray-700 flex-1 mx-5 md:mx-8 text-[12px] sm:text-[14px] md:text-[16px]">
        {templateName}
      </p>
      <div className="flex gap-x-8">
        <button
          className={`${
            isPreviewActive ? "text-orange-500" : "text-black"
          } text-[12px]`}
          onClick={onPreview}
        >
          Preview
        </button>
        <p className="text-[12px]">Edit</p>
      </div>
    </div>
  );
}
