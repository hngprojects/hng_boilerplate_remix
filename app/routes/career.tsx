import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";

import PaginationComponent from "~/components/ui/pagination";

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

  return (
    <div className="container mx-auto px-4">
      <h1 className="mb-4 text-2xl font-bold">Career Page</h1>
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
