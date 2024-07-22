import { Star } from "lucide-react";

interface CardProperties {
  image: string;
  name: string;
  occupation: string;
  comment: string;
  rating: number;
}

const TestimonialCard = ({
  image,
  name,
  occupation,
  comment,
  rating,
}: CardProperties) => {
  return (
    <div className="flex h-full max-w-[22.5rem] flex-col items-center justify-center gap-6 rounded-[0.375rem] border border-primary bg-white px-8 py-10 text-neutral-2">
      <p className="text-center text-sm">“{comment}”</p>
      <div className="flex gap-[0.3rem]">
        {Array.from({ length: rating }, (_, index) => (
          <span key={index}>
            <Star className="fill-current text-primary" />
          </span>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-[0.3rem]">
        <div className="h-[3.125rem] w-[3.125rem]">
          <img
            src={image}
            className="h-12 w-12 rounded-full"
            alt="user profile pics"
          />
        </div>

        <h6 className="text-lg font-semibold">{name}</h6>
        <p className="text-sm">{occupation}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
