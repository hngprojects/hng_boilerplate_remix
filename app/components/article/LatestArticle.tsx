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
            <article className="text-[#525252] max-w-[1000px] bg-[#fafafa]">
                <div className="grid md:grid-cols-2 gap-[24px] p-[24px] md:border-b-[1px] border-[#525252]">
                    <div className="space-y-[16px] md:px-[8px] lg:p-[16px] p-[16px]">
                        <span className="bg-[#F97316] pl-[10px] pr-[12px] py-[4px] rounded-full inline-flex justify-center items-center gap-[6px] text-[12px] font-[700]">
                            <span className="h-[8px] w-[8px] rounded-full bg-black"></span>
                            <div className="uppercase">
                                {article.tag}
                            </div>
                        </span>

                        <h3 className="md:text-[28px] text-[20px] md:font-[600] font-[700] capitalize leading-[normal]">
                            {article.title}
                        </h3>

                        <p className="font-[400] text-[14px] md:text-[18px] leading-[normal]">
                            {article.description}
                        </p>

                        <div className="flex justify-between items-center md:font-[500] font-[400] text-[14px] md:text-[16px]">
                            <div className="flex items-center gap-[8px]">
                                <img src={article.profileImage} alt={article.name} className="rounded-full w-[24px] md:w-[40px] h-[24px] md:h-[40px] object-cover object-top" />
                                <p className="font-[500] text-center">
                                    {article.name}
                                </p>
                            </div>
                            <p className="text-center">
                                {article.time}
                                {" "}
                                Read
                            </p>

                            <p className="text-center">
                                {article.creationDate}
                            </p>
                        </div>

                    </div>
                    <div className="flex items-center">
                        <img src={article.image} alt={article.title} className="w-full md:h-[300px] h-[250px] object-cover rounded-[6px] md:rounded-[8px] border-b-[1px] md:border-0 border-[#525252]" />
                    </div>
                </div>
            </article>
        </Link>
    )
}