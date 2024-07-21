import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";

interface PaginationComponentProperties {
  totalPages: number;
  currentPage: number;
}

const PaginationComponent: React.FC<PaginationComponentProperties> = ({
  totalPages,
  currentPage,
}) => {
  const [maxPagesToShow, setMaxPagesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 400) {
        setMaxPagesToShow(0);
      } else if (width <= 435) {
        setMaxPagesToShow(1);
      } else if (width <= 450) {
        setMaxPagesToShow(2);
      } else if (width <= 470) {
        setMaxPagesToShow(3);
      } else if (width <= 1024) {
        setMaxPagesToShow(5);
      } else {
        setMaxPagesToShow(totalPages);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [totalPages]);

  const generatePageNumbers = (): (number | string)[] => {
    const pageNumbers: (number | string)[] = [];
    const half = Math.floor(maxPagesToShow / 2);

    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);

    if (currentPage - half <= 0) {
      end = Math.min(totalPages, maxPagesToShow);
    }

    if (currentPage + half > totalPages) {
      start = Math.max(1, totalPages - maxPagesToShow + 1);
    }

    for (let index = start; index <= end; index++) {
      pageNumbers.push(index);
    }

    if (start > 1) {
      if (start > 2) {
        pageNumbers.unshift(1, "ellipsis");
      } else {
        pageNumbers.unshift(1);
      }
    }

    if (end < totalPages - 1) {
      pageNumbers.push("ellipsis", totalPages);
    } else if (end === totalPages - 1) {
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <nav
      aria-label="Pagination"
      className="my-4 flex justify-center font-[inter]"
    >
      <ul className="flex list-none items-center space-x-1 p-0">
        <li className="mx-1">
          <Link
            to={`?page=${Math.max(currentPage - 1, 1)}`}
            className={`flex items-center gap-2 space-x-1 rounded-md py-2 pl-2.5 pr-4 ${
              currentPage === 1
                ? "pointer-events-none text-gray-400 opacity-50"
                : "hover:bg-[#F4F4F5]"
            }`}
            aria-disabled={currentPage === 1}
          >
            <span style={{ fontSize: "14px" }}>&lt;</span>{" "}
            <span className="font-sans text-[20px] font-[600]">Previous</span>
          </Link>
        </li>
        {generatePageNumbers().map((page, index) =>
          page === "ellipsis" ? (
            <li key={index} className="mx-1 flex items-center">
              ...
            </li>
          ) : (
            <li key={index} className="mx-1">
              <Link
                to={`?page=${page}`}
                className={`rounded-md px-3 py-2 text-[14px] ${
                  currentPage === page
                    ? "bg-orange-500 text-white"
                    : `hover:bg-[#F4F4F5] ${
                        maxPagesToShow === 0 ? "hidden" : ""
                      }`
                } `}
              >
                {page}
              </Link>
            </li>
          ),
        )}
        <li className="mx-1">
          <Link
            to={`?page=${Math.min(currentPage + 1, totalPages)}`}
            className={`flex items-center gap-2 space-x-1 rounded-md py-2 pl-2.5 pr-4 ${
              currentPage === totalPages
                ? "pointer-events-none text-[#CBD5E1]"
                : "hover:bg-[#F4F4F5]"
            }`}
            aria-disabled={currentPage === totalPages}
          >
            <p className="font-sans text-[20px] font-[600]">Next </p>
            <span style={{ fontSize: "14px" }}>&gt;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationComponent;
