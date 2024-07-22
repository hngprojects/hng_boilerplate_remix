import { LoaderFunction } from "@remix-run/node";
import { json, Link, useLoaderData, useSearchParams } from "@remix-run/react";
import { useEffect, useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";

interface JobListing {
  id: string;
  title: string;
}

interface LoaderData {
  jobListings: {
    items: JobListing[];
    totalPages: number;
  };
}

const dummyJobListings = (page: number) => {
  const totalItems = 50;
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const items = Array.from({ length: itemsPerPage }, (_, index) => ({
    id: (startIndex + index + 1).toString(),
    title: `Job Listing ${startIndex + index + 1}`,
  }));

  return { items, totalPages };
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const page = Number.parseInt(url.searchParams.get("page") || "1", 10);
  const jobListings = dummyJobListings(page);

  if (Number.isNaN(page) || page < 1 || page > jobListings.totalPages) {
    throw new Response("Page not found", { status: 404 });
  }

  return json({ jobListings });
};

const CareerPage: React.FC = () => {
  const { jobListings } = useLoaderData<LoaderData>();
  const [searchParameters] = useSearchParams();
  const currentPage = Number.parseInt(searchParameters.get("page") || "1", 10);
  const totalPages = jobListings.totalPages;

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
    <div className="container mx-auto px-4">
      <h1>Career Page</h1>
      <div>
        {jobListings.items.map((job) => (
          <div key={job.id}>{job.title}</div>
        ))}
      </div>
      {jobListings.totalPages > 1 && (
        <Pagination className="my-4 flex justify-center font-[inter]">
          <PaginationContent className="flex items-center justify-between p-0">
            <PaginationItem className="mx-1">
              <Link
                to={`?page=${Math.max(currentPage - 1, 1)}`}
                className={`flex items-center gap-2 space-x-1 rounded-md py-2 pl-2.5 pr-4 ${
                  currentPage === 1
                    ? "pointer-events-none text-gray-400 opacity-50"
                    : "hover:bg-[#F4F4F5]"
                }`}
              >
                <PaginationPrevious size={250} />
              </Link>
            </PaginationItem>
            {generatePageNumbers().map((page, index) =>
              page === "ellipsis" ? (
                <PaginationItem key={index}>
                  <PaginationEllipsis className="flex items-center" />
                </PaginationItem>
              ) : (
                <PaginationItem key={index} className="mx-1">
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
                    <PaginationLink size={20}>{page}</PaginationLink>
                  </Link>
                </PaginationItem>
              ),
            )}
            <PaginationItem className="mx-1">
              <Link
                to={`?page=${Math.min(currentPage + 1, totalPages)}`}
                className={`flex items-center gap-2 space-x-1 rounded-md py-2 pl-2.5 pr-4 ${
                  currentPage === totalPages
                    ? "pointer-events-none text-[#CBD5E1]"
                    : "hover:bg-[#F4F4F5]"
                }`}
                aria-disabled={currentPage === totalPages}
              >
                <PaginationNext size={250} />
              </Link>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default CareerPage;
