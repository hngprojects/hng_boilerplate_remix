interface TemplateListItemProperty {
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
}: TemplateListItemProperty) {
  return (
    <div className="flex w-full max-w-full items-center border-b border-gray-300 py-4 pl-4 pr-8 md:max-w-3xl md:py-8 md:pl-10 md:pr-16">
      <div className="w-8 flex-shrink-0 sm:w-24 md:w-32">
        <img
          src={templateImage}
          alt="template preview"
          className="h-auto w-full"
        />
      </div>
      <p className="mx-5 flex-1 text-[12px] text-gray-700 sm:text-[14px] md:mx-8 md:text-[16px]">
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
