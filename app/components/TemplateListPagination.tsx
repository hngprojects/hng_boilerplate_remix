interface TemplateListPaginationProperty {
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
}: TemplateListPaginationProperty) {
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);

  const pageNumbers = [];
  for (let index = startPage; index <= endPage; index++) {
    pageNumbers.push(index);
  }

  return (
    <div className="flex w-full max-w-full flex-col flex-wrap items-center justify-between rounded-b-[19px] bg-[#F8F8F8] px-[24px] py-[16px] sm:flex-row md:max-w-3xl">
      <p className="mb-4 sm:mb-0">{`Page ${currentPage} of ${totalPages}`}</p>
      <div className="mb-4 flex space-x-2 sm:mb-0">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handleEachPageClick(pageNumber)}
            className={`flex h-[30px] w-[30px] items-center justify-center rounded-[6px] p-[10px] sm:h-[36px] sm:w-[36px] sm:text-[14px] ${
              pageNumber === currentPage
                ? "border-[1px] border-[#F97316] bg-[#FFECE5] text-[#344054]"
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
          className="flex h-[30px] w-[30px] items-center justify-center rounded-[6px] border-[1px] border-[#E2E8F0] bg-white p-[10px] sm:h-[36px] sm:w-[36px] sm:text-[14px]"
        >
          <img src="/prevArrow.svg" alt="Previous" />
        </button>
        <button
          onClick={handleNext}
          className="flex h-[30px] w-[30px] items-center justify-center rounded-[6px] border-[1px] border-[#E2E8F0] bg-white p-[10px] sm:h-[36px] sm:w-[36px] sm:text-[14px]"
        >
          <img src="/nextArrow.svg" alt="Next" />
        </button>
      </div>
    </div>
  );
}
