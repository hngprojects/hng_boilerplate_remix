import { FC } from "react";

interface NoSearchResultsProperties {
  searchText: string;
}

const NoSearchResults: FC<NoSearchResultsProperties> = ({ searchText }) => {
  const isVisible = true;

  return (
    <div className="font-inter flex w-[100%] items-center justify-center bg-[#FAFAFA]">
      <div
        className={`flex h-[326px] w-[326px] flex-col items-center gap-0.5 lg:h-[449.06px] lg:w-[557px] ${
          isVisible ? "animate-accordion-down" : ""
        }`}
      >
        <img
          src="notFoundImage.png"
          alt="No search results"
          className={`h-[242px] w-[242px] lg:h-[383.06px] lg:w-[442.64px] ${
            isVisible ? "animate-accordion-down" : ""
          }`}
        />
        <h5
          className={`text-center text-[20px] font-semibold leading-[24.2px] text-[#525252] lg:text-[28px] lg:leading-[33.89px] lg:text-[#0A0A0A] ${
            isVisible ? "animate-accordion-down" : ""
          }`}
        >
          Sorry, No result found for &quot; {searchText ?? "Product Web"} &quot;
        </h5>
        <h6
          className={`text-center text-[18px] font-normal leading-[21.78px] text-[#525252] lg:text-[20px] lg:leading-[24.2px] lg:text-[#0A0A0A] ${
            isVisible ? "animate-accordion-down" : ""
          }`}
        >
          You might want to try looking for another job title
        </h6>
      </div>
    </div>
  );
};

export default NoSearchResults;
