import { useState } from "react";

import TemplateListItem from "./TemplateListItem";
import TemplateListPagination from "./TemplateListPagination";

const templates = [
  {
    id: 1,
    templateImage: "/email-template-1.png",
    templateName: "Welcome - No Image",
    isPreviewActive: false,
  },
  {
    id: 2,
    templateImage: "/email-template-2.png",
    templateName: "Welcome - Image",
    isPreviewActive: false,
  },
  {
    id: 3,
    templateImage: "/email-template-3.png",
    templateName: "Reset Password - No Image",
    isPreviewActive: false,
  },
  {
    id: 4,
    templateImage: "/email-template-4.png",
    templateName: "Reset Password - Image",
    isPreviewActive: false,
  },
  {
    id: 5,
    templateImage: "/email-template-5.png",
    templateName: "Password reset Complete - No Image",
    isPreviewActive: false,
  },
  {
    id: 6,
    templateImage: "/email-template-1.png",
    templateName: "Welcome - No Image",
    isPreviewActive: false,
  },
  {
    id: 7,
    templateImage: "/email-template-2.png",
    templateName: "Welcome - Image",
    isPreviewActive: false,
  },
  {
    id: 8,
    templateImage: "/email-template-3.png",
    templateName: "Reset Password - No Image",
    isPreviewActive: false,
  },
  {
    id: 9,
    templateImage: "/email-template-4.png",
    templateName: "Reset Password - Image",
    isPreviewActive: false,
  },
  {
    id: 10,
    templateImage: "/email-template-5.png",
    templateName: "Password reset Complete - No Image",
    isPreviewActive: false,
  },
  {
    id: 11,
    templateImage: "/email-template-1.png",
    templateName: "Welcome - No Image",
    isPreviewActive: false,
  },
  {
    id: 12,
    templateImage: "/email-template-2.png",
    templateName: "Welcome - Image",
    isPreviewActive: false,
  },
  {
    id: 13,
    templateImage: "/email-template-3.png",
    templateName: "Reset Password - No Image",
    isPreviewActive: false,
  },
  {
    id: 14,
    templateImage: "/email-template-4.png",
    templateName: "Reset Password - Image",
    isPreviewActive: false,
  },
  {
    id: 15,
    templateImage: "/email-template-5.png",
    templateName: "Password reset Complete - No Image",
    isPreviewActive: false,
  },
  {
    id: 16,
    templateImage: "/email-template-5.png",
    templateName: "Password reset Complete - No Image",
    isPreviewActive: false,
  },
  {
    id: 17,
    templateImage: "/email-template-5.png",
    templateName: "Password reset Complete - No Image",
    isPreviewActive: false,
  },
  {
    id: 18,
    templateImage: "/email-template-5.png",
    templateName: "Password reset Complete - No Image",
    isPreviewActive: false,
  },
  {
    id: 19,
    templateImage: "/email-template-5.png",
    templateName: "Password reset Complete - No Image",
    isPreviewActive: false,
  },
  {
    id: 20,
    templateImage: "/email-template-5.png",
    templateName: "Password reset Complete - No Image",
    isPreviewActive: false,
  },

  {
    id: 21,
    templateImage: "/email-template-5.png",
    templateName: "Password reset Complete - No Image",
    isPreviewActive: false,
  },
  {
    id: 22,
    templateImage: "/email-template-5.png",
    templateName: "Password reset Complete - No Image",
    isPreviewActive: false,
  },
  {
    id: 23,
    templateImage: "/email-template-5.png",
    templateName: "Password reset Complete - No Image",
    isPreviewActive: false,
  },
  {
    id: 24,
    templateImage: "/email-template-5.png",
    templateName: "Password reset Complete - No Image",
    isPreviewActive: false,
  },
];

const TEMPLATES_PER_PAGE = 5;

export default function TemplateListTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [templatesData, setTemplatesData] = useState(templates);

  const totalPages = Math.ceil(templates.length / TEMPLATES_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleEachPageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePreview = (id: number) => {
    setTemplatesData((previousTemplates) =>
      previousTemplates.map((template) =>
        template.id === id
          ? { ...template, isPreviewActive: !template.isPreviewActive }
          : { ...template, isPreviewActive: false },
      ),
    );
  };

  const startIndex = (currentPage - 1) * TEMPLATES_PER_PAGE;
  const endIndex = startIndex + TEMPLATES_PER_PAGE;
  const currentTemplates = templatesData.slice(startIndex, endIndex);

  return (
    <div className="border-[rgba(203, 213, 225, 0.60)] w-full max-w-full rounded-[19px] border-[1px] md:max-w-3xl">
      <div>
        {currentTemplates.map((template) => (
          <TemplateListItem
            key={template.id}
            templateImage={template.templateImage}
            templateName={template.templateName}
            isPreviewActive={template.isPreviewActive}
            onPreview={() => handlePreview(template.id)}
          />
        ))}
      </div>
      <TemplateListPagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleNext={handleNext}
        handlePrev={handlePrevious}
        handleEachPageClick={handleEachPageClick}
      />
    </div>
  );
}
