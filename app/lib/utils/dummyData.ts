interface JobListing {
  id: string;
  title: string;
}

export const generateDummyJobListings = (page: number) => {
  const totalItems = 50;
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const items: JobListing[] = Array.from(
    { length: itemsPerPage },
    (_, index) => ({
      id: (startIndex + index + 1).toString(),
      title: `Job Listing ${startIndex + index + 1}`,
    })
  );

  return { items, totalPages };
};
