import { Link, useLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button";

type jobInfoProp = {
  name: string;
  id: string;
  job_description: string;
  key_responsibility: [];
  qualification: [];
  what_we_offer: [];
  about_job: {
    dadline: string;
    experience: string;
    job_type: string;
    salary: string;
    work_mode: "On-site" | "Remote";
  };
};

const JobId = () => {
  const jobInfo: jobInfoProp = useLoaderData();

  return (
    <div className="py-10 px-[25px] lg:px-[120px] ">
      <span className="text-[12px] font-normal lg:flex gap-[16px] hidden lg:pb-[41px]">
        <Link to="/" className="hover:text-destructive">
          Home
        </Link>
        &gt;
        <Link to="#" className="hover:text-destructive">
          Job Listing
        </Link>
        &gt;
        <span className="text-muted-foreground">Job Details</span>
      </span>
      <span className="text-[12px] font-normal flex gap-[16px] lg:hidden lg:pb-[20px]">
        <Link to="/" className="hover:text-destructive">
          Career
        </Link>
        &gt; <span className="text-card-foreground">Job Details</span>
      </span>
      <div className=" pb-[21px] max-w-[1444px] flex flex-col lg:flex-row justify-between gap-[23px] sm:gap-[23px] md:gap-[50px] lg:gap-[228px]  items-start">
        <div>
          <h2 className="lg:font-semibold font-bold text-[32px] lg:text-[44px] mb-[19px]">
            {jobInfo.name}
          </h2>
          <div className="pb-[19px]">
            <h3 className="font-semibold lg:font-bold text-[20px] lg:text-[28px] pb-[6px] text-muted-foreground lg:text-primary">
              Job Description
            </h3>
            <p className="font-normal lg:text-[18px] text-muted-foreground lg:text-primary">
              {jobInfo.job_description}
            </p>
          </div>
          <div className="pb-[19px]">
            <h3 className="font-semibold lg:font-bold text-[20px] lg:text-[28px] pb-[6px] text-muted-foreground lg:text-primary">
              Key Responsibilities
            </h3>
            <ul className="list-disc pl-5 lg:text-[18px] text-muted-foreground lg:text-primary">
              {jobInfo.key_responsibility.map((res) => (
                <li>{res}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold lg:font-bold text-[20px] lg:text-[28px] pb-[6px] text-muted-foreground lg:text-primary">
              Qualification
            </h3>
            <ul className="list-disc pl-5 lg:text-[18px] text-muted-foreground lg:text-primary">
              {jobInfo.qualification.map((res) => (
                <li>{res}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-[27px]">
          <div className="w-[282px] h-[342px] border border-[#CBD5E1] rounded-[6px] "></div>
          <div className="w-[282px] h-[332px] border border-[#CBD5E1] rounded-[6px] "></div>
          <div className="w-[282px] h-[136px] border border-[#CBD5E1] rounded-[6px] "></div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[19px]">
        <Button
          variant={"destructive"}
          className="sm:w-full w-[342px] lg:w-[412px] h-[56px]  text-[16px] font-medium flex items-center gap-2 "
        >
          <img src="/svgs/icon.svg" alt="" className="lg:hidden" />
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export async function loader() {
  const job = {
    id: "123456789",
    name: "Product Manager",
    job_description:
      "We are looking for a talented and passionate Product Designer to join our dynamic team. As a Product Designer at the Company, you will play a critical role in shaping the user experience and visual design of our products. You will collaborate closely with cross-functional teams, including product managers, engineers, and marketers, to create intuitive and aesthetically pleasing designs that meet user needs and business goals.",
    key_responsibility: [
      "Conduct user research and gather insights to inform design decisions",
      "Create wireframes, prototypes, and high-fidelity mockups for new features and product enhancements",
      "Collaborate with the product team to define design requirements and ensure alignment with business objectives",
      "Develop and maintain design systems to ensure consistency across all products",
      "Conduct usability testing and iterate on designs based on user feedback",
      "Stay up-to-date with industry trends and best practices in design and user experience",
    ],
    qualification: [
      "Bachelor's degree in Design, Human-Computer Interaction, or a related field",
      "3+ years of experience in product design or a similar role",
      "Proficiency in design tools such as Figma, Sketch, Adobe XD, or similar",
      "Strong portfolio showcasing your design process, problem-solving skills, and final products",
      "Excellent communication and collaboration skills",
      "Ability to think critically and solve complex design challenges",
      "Knowledge of HTML, CSS, and JavaScript is a plus",
    ],
    about_job: {
      deadline: "23-09-2024",
      work_mode: "On-site",
      job_type: "Intership",
      experience: "2-3 years",
      salary: "$500k-$900k",
    },
    what_we_offer: [
      "Competitive salary and benefits",
      "Flexible working hours and remote work options",
      "Opportunities for professional growth and development",
      "A collaborative and inclusive work environment",
    ],
    how_to_apply: [
      "Send your CV and cover letter to this email hng123@gmail.com",
    ],
  };
  return job;
}

export default JobId;
