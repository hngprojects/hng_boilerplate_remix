import { Link } from "@remix-run/react";

interface articleProperties {
  id: string;
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
      <article className="max-w-[792px] bg-[#fafafa] text-[#525252]">
        <div className="grid gap-6 py-4 md:grid-cols-5 md:py-8">
          <div className="order-2 space-y-2 md:order-1 md:col-span-3 md:space-y-4">
            <span className="inline-flex items-center justify-center gap-1.5 rounded-full bg-border py-1 pl-2.5 pr-3 text-xs font-bold">
              <span className="h-2 w-2 rounded-full bg-black"></span>
              <div className="uppercase">{article.tag}</div>
            </span>

            <h3 className="text-xl font-bold capitalize leading-[normal] tracking-wider md:text-3xl md:font-semibold">
              {article.title}
            </h3>

            <p className="text-base font-normal leading-[normal] tracking-wide md:text-lg">
              {article.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-base font-medium md:justify-between md:gap-0 md:text-lg">
              <div className="order-3 flex w-full items-center gap-3 md:order-1 md:w-auto">
                <img
                  src={article.profileImage}
                  alt={article.name}
                  className="h-8 w-8 rounded-full object-cover object-top md:h-10 md:w-10"
                />
                <p className="">{article.name}</p>
              </div>
              <p className="order-1 md:order-2">{article.time} Read</p>

              <p className="order-2 flex items-center justify-center gap-4 md:order-3">
                <span className="h-2 w-2 rounded-full bg-border"></span>
                <span>{article.creationDate}</span>
              </p>
            </div>
          </div>
          <div className="order-1 flex md:order-2 md:col-span-2 md:items-end">
            <img
              src={article.image}
              alt={article.title}
              className="md:rounded-2 h-60 w-full rounded-lg object-cover md:h-60"
            />
          </div>
        </div>
      </article>
    </Link>
  );
}
