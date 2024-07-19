import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import PaginationComponent from "~/components/Pagination";

/**
 * Interface representing a job listing.
 */
interface JobListing {
  id: string;
  title: string;
}

/**
 * Interface representing the loader data.
 */
interface LoaderData {
  jobListings: {
    items: JobListing[];
    totalPages: number;
  };
}

/**
 * Generates dummy job listings for the specified page.
 *
 * @param {number} page - The current page number.
 * @returns {{ items: JobListing[]; totalPages: number }} The dummy job listings and total pages.
 */
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

/**
 * Loader function for the career page.
 *
 * @param {object} params - The loader function parameters.
 * @param {Request} params.request - The incoming request object.
 * @returns {Promise<Response>} The response containing the loader data.
 */
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  let page = parseInt(url.searchParams.get("page") || "1", 10);
  if (isNaN(page) || page < 1) {
    page = 1;
  }
  const jobListings = dummyJobListings(page);
  return json({ jobListings });
};

/**
 * CareerPage component for displaying job listings and pagination.
 *
 * @returns {JSX.Element} The rendered career page component.
 */
const CareerPage: React.FC = () => {
  const { jobListings } = useLoaderData<LoaderData>();
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Career Page</h1>
      <div>
        {jobListings.items.map((job) => (
          <div key={job.id} className="mb-2">
            {job.title}
          </div>
        ))}
      </div>
      {jobListings.totalPages > 1 && (
        <PaginationComponent
          totalPages={jobListings.totalPages}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default CareerPage;
