import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";
import PropTypes from "prop-types";

interface PaginationComponentProps {
  totalPages: number;
  currentPage: number;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
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

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
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
      className="flex justify-center my-4 font-[inter]">
      <ul className="flex list-none p-0 space-x-1 items-center">
        <li className="mx-1">
          <Link
            to={`?page=${currentPage - 1}`}
            className={`py-2 pr-4 pl-2.5 space-x-1 rounded-md flex items-center gap-2 ${
              currentPage === 1
                ? "pointer-events-none opacity-50 text-gray-400"
                : "hover:bg-[#F4F4F5]"
            }`}
            aria-disabled={currentPage === 1}>
            <span style={{ fontSize: "14px" }}>&lt;</span>{" "}
            <span className="font-[600] text-[20px]">Previous</span>
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
                className={`px-3 py-2 rounded-md text-[14px] ${
                  currentPage === page
                    ? "bg-orange-500 text-white"
                    : `hover:bg-[#F4F4F5] ${
                        maxPagesToShow === 0 ? "hidden" : ""
                      }`
                } `}>
                {page}
              </Link>
            </li>
          )
        )}
        <li className="mx-1">
          <Link
            to={`?page=${currentPage + 1}`}
            className={`py-2 pr-4 pl-2.5 space-x-1 rounded-md flex items-center gap-2 ${
              currentPage === totalPages
                ? "pointer-events-none text-[#CBD5E1]"
                : "hover:bg-[#F4F4F5]"
            }`}
            aria-disabled={currentPage === totalPages}>
            <span className="font-[600] text-[20px]">Next </span>
            <span style={{ fontSize: "14px" }}>&gt;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

PaginationComponent.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default PaginationComponent;
