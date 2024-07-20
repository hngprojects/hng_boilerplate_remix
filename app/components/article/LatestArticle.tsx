import { Link } from "@remix-run/react";

interface props {
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

export default function LatestArticle({ article }: { article: props }) {
    return (
        <Link to={article.link}>
            <article className="text-muted-foreground max-w-[792px] bg-[#fafafa]">
                <div className="grid md:grid-cols-5 gap-[24px] md:py-[32px] py-[16px]">
                    <div className="order-2 md:order-1 md:col-span-3 space-y-[8px] md:space-y-[16px]">
                        <span className="bg-border pl-[10px] pr-[12px] py-[4px] rounded-full inline-flex justify-center items-center gap-[6px] text-[12px] font-[700]">
                            <span className="h-[8px] w-[8px] rounded-full bg-black"></span>
                            <div className="uppercase">
                                {article.tag}
                            </div>
                        </span>

                        <h3 className="md:text-[28px] text-[20px] md:font-[600] font-[700] capitalize leading-[normal] tracking-wider">
                            {article.title}
                        </h3>

                        <p className="font-[400] text-[14px] md:text-[18px] leading-[normal]">
                            {article.description}
                        </p>

                        <div className="flex md:justify-between items-center gap-[16px] md:gap-0 flex-wrap font-[500] text-[14px] md:text-[16px]">
                            <div className="flex items-center gap-[12px] w-full md:w-auto order-3 md:order-1">
                                <img src={article.profileImage} alt={article.name} className="rounded-full w-[32px] md:w-[40px] h-[32px] md:h-[40px] object-cover object-top" />
                                <p className="">
                                    {article.name}
                                </p>
                            </div>
                            <p className="order-1 md:order-2">
                                {article.time}
                                {" "}
                                Read
                            </p>

                            <p className="order-2 md:order-3">
                                {article.creationDate}
                            </p>
                        </div>

                    </div>
                    <div className="order-1 md:order-2 md:col-span-2 flex md:items-end">
                        <img src={article.image} alt={article.title} className="w-full md:h-[250px] h-[230px] object-cover rounded-[6px] md:rounded-[8px]" />
                    </div>
                </div>
            </article>
        </Link>
    )
}