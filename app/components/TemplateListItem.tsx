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
