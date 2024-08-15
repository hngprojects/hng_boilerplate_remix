import { CircleCheck } from "lucide-react";

import JobDetailsBreadCrumb from "~/components/JobDetailsBreadCrumb";
import Footer from "~/components/ui/footer";
import Header from "~/components/ui/header";

const keyResponsibilities: string[] = [
  "Conduct user research and gather insights to inform design decisions",
  "Create wireframes, prototypes, and high - fidelity mockups for new features and product enhancements",
  "Collaborate with the product team to define design requirements and ensure alignment with business objectives",
  "Develop and maintain design systems to ensure consistency across all products",
  "Conduct usability testing and iterate on designs based on user feedback",
  "Stay up - to - date with industry trends and best practices in design and user experience",
];
const qualifications: string[] = [
  "Bachelor's degree in Design, Human-Computer Interaction, or a related field",
  "3 + years of experience in product design or a similar role",
  "Proficiency in design tools such as Figma, Sketch, Adobe XD, or similar",
  "Strong portfolio showcasing your design process, problem - solving skills, and final products",
  "Excellent communication and collaboration skills",
  "Ability to think critically and solve complex design challenges",
  "Knowledge of HTML, CSS, and JavaScript is a plus",
];
const offers: string[] = [
  "Competitive salary and benefits",
  "Flexible working hours and remote work options",
  "Opportunities for professional growth and development",
  "A collaborative and inclusive work environment",
];
interface aboutTypes {
  title: string;
  desc: string;
}

const AboutJob: aboutTypes[] = [
  {
    title: "Deadline",
    desc: "July 9th, 2024",
  },
  {
    title: "Work mode",
    desc: "On-site",
  },
  {
    title: "Job type",
    desc: "Internship",
  },
  {
    title: "Experience level",
    desc: "2-3 years",
  },
  {
    title: "Salary",
    desc: "$500k - $900k",
  },
];
const JobDetails = () => {
  return (
    <section>
      <Header />
      <div className="px-5 pt-3 md:px-[120px]">
        {/* Breadcrumb */}

        <JobDetailsBreadCrumb />
        <div className="mdz:gap-32 mt-5 flex flex-col justify-between gap-10 sm:flex-row">
          {/* Left Content */}
          <div className="w-full text-[1.125rem] md:w-[60%]">
            <h1 className="my-3 text-[2rem] font-[600] sm:text-4xl sm:font-[700]">
              Product Designer
            </h1>
            <div>
              <h2 className="text-[1.25rem] font-[600] sm:text-[1.75rem] sm:font-[700]">
                Job Description
              </h2>
              <p>
                We are looking for a talented and passionate Product Designer to
                join our dynamic team. As a Product Designer at the Company, you
                will play a critical role in shaping the user experience and
                visual design of our products. You will collaborate closely with
                cross-functional teams, including product managers, engineers,
                and marketers, to create intuitive and aesthetically pleasing
                designs that meet user needs and business goals.
              </p>
              <h2 className="mt-4 text-[1.25rem] font-[600] sm:text-[1.75rem] sm:font-[700]">
                Key Responsibilities
              </h2>
              <ul className="list-inside list-disc font-[400]">
                {keyResponsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <h2 className="mt-4 text-[1.25rem] font-[600] sm:text-[1.75rem] sm:font-[700]">
                Qualifications
              </h2>
              <ul className="list-inside list-disc font-[400]">
                {qualifications.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex w-full flex-col gap-4 text-[1.125rem] md:w-[17.5rem]">
            <div className="rounded-[.375rem] border border-[#cbd5e1] p-4">
              <h3 className="text-[1.25rem] font-[600]">About the Job</h3>
              {AboutJob.map((item, index) => (
                <span key={index}>
                  <p className="text-[1rem] font-[400]">{item.title}</p>
                  <p className="text-[1.125rem] font-[400]">{item.desc}</p>
                </span>
              ))}
            </div>
            <div className="rounded-[.375rem] border border-[#cbd5e1] p-4">
              <h3 className="text-[1.25rem] font-[600]">What we offer</h3>
              <ul className="list-inside list-disc pl-2 font-[400]">
                {offers.map((offer, index) => (
                  <li key={index}>{offer}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[.375rem] border border-[#cbd5e1] p-4">
              <h3 className="text-[1.25rem] font-[600]">How to Apply</h3>
              <p>
                Send your CV and cover letter to this email{" "}
                <span className="font-[500]">hng123@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="my-8 flex w-full sm:justify-center">
          <button className="flex h-12 w-full items-center justify-center gap-2 rounded-[.5rem] bg-primary px-4 py-2 font-medium text-secondary sm:w-[26rem]">
            {" "}
            <CircleCheck className="h-4 w-4" /> <span>Apply Now</span>
          </button>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default JobDetails;
