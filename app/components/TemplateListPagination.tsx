interface TemplateListPaginationProp {
  currentPage: number;
  totalPages: number;
  handleEachPageClick: (pageNumber: number) => void;
  handleNext: () => void;
  handlePrev: () => void;
}

export default function TemplateListPagination({
  currentPage,
  totalPages,
  handleEachPageClick,
  handleNext,
  handlePrev,
}: TemplateListPaginationProp) {
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center flex-wrap py-[16px] px-[24px] w-full max-w-full md:max-w-3xl bg-[#F8F8F8] rounded-b-[19px]">
      <p className="mb-4 sm:mb-0">{`Page ${currentPage} of ${totalPages}`}</p>
      <div className="flex space-x-2 mb-4 sm:mb-0">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handleEachPageClick(pageNumber)}
            className={`p-[10px] flex items-center justify-center rounded-[6px] sm:text-[14px] w-[30px] sm:w-[36px] h-[30px] sm:h-[36px] ${
              pageNumber === currentPage
                ? " text-[#344054] border-[1px] bg-[#FFECE5] border-[#F97316]"
                : "bg-white text-[#98A2B3]"
            }`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handlePrev}
          className="p-[10px] flex items-center justify-center rounded-[6px] sm:text-[14px] w-[30px] sm:w-[36px] h-[30px] sm:h-[36px] bg-white border-[1px] border-[#E2E8F0]"
        >
          <img src="/prevArrow.svg" alt="Previous" />
        </button>
        <button
          onClick={handleNext}
          className="p-[10px] flex items-center justify-center rounded-[6px] sm:text-[14px] w-[30px] sm:w-[36px] h-[30px] sm:h-[36px] bg-white border-[1px] border-[#E2E8F0]"
        >
          <img src="/nextArrow.svg" alt="Next" />
        </button>
      </div>
    </div>
  );
}
