import React, { useState } from "react";

interface NoSearchResultsProps {
  searchText: string;
}

const NoSearchResults: React.FC<NoSearchResultsProps> = ({ searchText }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="flex items-center justify-center min-w-[100%] bg-[#FAFAFA] font-inter">
      <div
        className={`flex flex-col items-center gap-0.5 w-[326px] lg:w-[557px] h-[326px] lg:h-[449.06px] ${
          isVisible && "animate-slideIn"
        }`}
      >
        <img
          src="/no-results/object.png"
          alt="No search results"
          className={`w-[242px] lg:w-[442.64px] h-[242px] lg:h-[383.06px] ${
            isVisible && "animate-slideIn2"
          }`}
        />
        <h5
          className={`font-semibold text-[20px] lg:text-[28px] leading-[24.2px] lg:leading-[33.89px] text-center text-[#525252] lg:text-[#0A0A0A] ${
            isVisible && "animate-slideIn3"
          }`}
        >
          Sorry, No result found for "{searchText ? searchText : "Product Web"}"
        </h5>
        <h6
          className={`font-normal text-[18px] lg:text-[20px] leading-[21.78px] lg:leading-[24.2px] text-center text-[#525252] lg:text-[#0A0A0A] ${
            isVisible && "animate-slideIn4"
          }`}
        >
          You might want to try looking for another job title
        </h6>
      </div>
    </div>
  );
};

export default NoSearchResults;
