import { useState } from "react";

const jobs = [
  { title: "Product Designer", location: "Lagos, Nigeria", type: "Full-time", description: "The Product Designer in the Company will play a critical role in designing the products that our users...", salary: "$5000 - $8000/month" },
  { title: "Chartered Accountant", location: "Remote", type: "Full-time", description: "As a Chartered Accountant for the Company, you will play a vital role in managing the financial health of...", salary: "$4000 - $6000/month" },
  { title: "Assistant General Manager", location: "Remote", type: "Full-time", description: "As the assistant general manager of the Company, you will play a critical role in managing the day-to-day...", salary: "$7000 - $9000/month" },
  { title: "Software Engineer", location: "Lagos, Nigeria", type: "Full-time", description: "As a Software Engineer, you will develop and maintain software solutions...", salary: "$6000 - $9000/month" },
  { title: "Marketing Manager", location: "Remote", type: "Full-time", description: "The Marketing Manager will be responsible for creating and implementing marketing strategies...", salary: "$5000 - $7500/month" },
  { title: "Data Scientist", location: "Lagos, Nigeria", type: "Full-time", description: "As a Data Scientist, you will analyze and interpret complex data to help the company make informed decisions...", salary: "$7000 - $9500/month" },
  { title: "HR Manager", location: "Remote", type: "Full-time", description: "The HR Manager will oversee all aspects of human resources practices and processes...", salary: "$5000 - $8000/month" },
  { title: "UI/UX Designer", location: "Lagos, Nigeria", type: "Full-time", description: "The UI/UX Designer will create visually appealing and user-friendly interfaces for our products...", salary: "$5500 - $8500/month" },
  { title: "Sales Executive", location: "Remote", type: "Full-time", description: "The Sales Executive will drive sales growth by identifying and pursuing new business opportunities...", salary: "$4000 - $6500/month" },
  { title: "Operations Manager", location: "Lagos, Nigeria", type: "Full-time", description: "As an Operations Manager, you will oversee the day-to-day operations of the company...", salary: "$6500 - $9000/month" },
  { title: "Customer Support Specialist", location: "Remote", type: "Full-time", description: "The Customer Support Specialist will assist customers with their inquiries and resolve any issues they may have...", salary: "$3500 - $5500/month" },
  { title: "Network Administrator", location: "Lagos, Nigeria", type: "Full-time", description: "The Network Administrator will manage and maintain the company's network infrastructure...", salary: "$5000 - $7000/month" },
  { title: "Project Manager", location: "Remote", type: "Full-time", description: "The Project Manager will oversee and manage projects from inception to completion...", salary: "$6000 - $8500/month" },
  { title: "Graphic Designer", location: "Lagos, Nigeria", type: "Full-time", description: "The Graphic Designer will create visual content for various marketing and branding purposes...", salary: "$4500 - $6500/month" },
  { title: "Content Writer", location: "Remote", type: "Full-time", description: "The Content Writer will produce high-quality written content for the company's blog, website, and marketing materials...", salary: "$4000 - $6000/month" },
  { title: "QA Tester", location: "Lagos, Nigeria", type: "Full-time", description: "The QA Tester will ensure the quality and functionality of our software products through thorough testing and analysis...", salary: "$5000 - $7500/month" },
  { title: "Business Analyst", location: "Remote", type: "Full-time", description: "The Business Analyst will analyze business processes and provide insights to improve efficiency and profitability...", salary: "$6000 - $8500/month" },
  { title: "System Administrator", location: "Lagos, Nigeria", type: "Full-time", description: "The System Administrator will manage and maintain the company's IT systems and infrastructure...", salary: "$5500 - $8000/month" },
  { title: "Digital Marketing Specialist", location: "Remote", type: "Full-time", description: "The Digital Marketing Specialist will develop and implement online marketing strategies to drive traffic and sales...", salary: "$5000 - $7500/month" },
];

export default function Jobs() {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  // Calculate the current jobs to display
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  // Calculate total pages
  const totalPages = Math.ceil(jobs.length / jobsPerPage);



  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="container mx-auto py-10 px-6">
      <section className="bg-white p-8 rounded shadow-md">
     <center> <h3 className="bg-gray-200 text-center text-xl font-semibold py-2 px-4 rounded mb-6 inline-block">
          Career
        </h3></center>
      <h1 className="text-3xl font-bold mb-6 text-center">
          Available <span className="text-orange-500 font-extrabold">Jobs</span> in Our company
        </h1>
        <p className="text-gray-600 mb-6">
          Explore job opportunities across various fields that fit your skills and career aspirations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {currentJobs.map((job, index) => (
            <div key={index} className="border p-4 rounded shadow-sm">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-600">{job.location} - {job.type}</p>
              <p className="text-gray-600">{job.description}</p>
              <p className="text-orange-500 font-bold">{job.salary}</p>
              <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">View Details</button>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center space-x-2">
          {currentPage > 1 && (
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              onClick={handlePrevPage}
            >
              Previous
            </button>
          )}
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded ${currentPage === i + 1 ? "bg-orange-500 text-white" : "bg-gray-300 text-gray-700 hover:bg-gray-400"}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              onClick={handleNextPage}
            >
              Next
            </button>
          )}
        </div>
      </section>
    </div>
  );
  }