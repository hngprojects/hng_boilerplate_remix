import { Link } from "@remix-run/react";

interface articleProperties {
  title: string;
  description: string;
  profileImage: string;
  name: string;
  time: string;
  creationDate: string;
  image: string;
  link: string;
  tag: string;
}

export default function LatestArticle({
  article,
}: {
  article: articleProperties;
}) {
  return (
    <Link to={article.link}>
      <article className="max-w-[792px] bg-[#fafafa] text-muted-foreground">
        <div className="grid gap-[24px] py-[16px] md:grid-cols-5 md:py-[32px]">
          <div className="order-2 space-y-[8px] md:order-1 md:col-span-3 md:space-y-[16px]">
            <span className="inline-flex items-center justify-center gap-[6px] rounded-full bg-border py-[4px] pl-[10px] pr-[12px] text-[12px] font-[700]">
              <span className="h-[8px] w-[8px] rounded-full bg-black"></span>
              <div className="uppercase">{article.tag}</div>
            </span>

            <h3 className="text-[20px] font-[700] capitalize leading-[normal] tracking-wider md:text-[28px] md:font-[600]">
              {article.title}
            </h3>

            <p className="text-[14px] font-[400] leading-[normal] tracking-wide md:text-[18px]">
              {article.description}
            </p>

            <div className="flex flex-wrap items-center gap-[16px] text-[14px] font-[500] md:justify-between md:gap-0 md:text-[16px]">
              <div className="order-3 flex w-full items-center gap-[12px] md:order-1 md:w-auto">
                <img
                  src={article.profileImage}
                  alt={article.name}
                  className="h-[32px] w-[32px] rounded-full object-cover object-top md:h-[40px] md:w-[40px]"
                />
                <p className="">{article.name}</p>
              </div>
              <p className="order-1 md:order-2">{article.time} Read</p>

              <p className="order-2 md:order-3">{article.creationDate}</p>
            </div>
          </div>
          <div className="order-1 flex md:order-2 md:col-span-2 md:items-end">
            <img
              src={article.image}
              alt={article.title}
              className="h-[230px] w-full rounded-[6px] object-cover md:h-[250px] md:rounded-[8px]"
            />
          </div>
        </div>
      </article>
    </Link>
  );
}
