import { IoBookmark } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { FaRegEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div>
      <div className="bg-base-200 flex justify-between items-center px-2 my-2 ">
        <section className="flex gap-4 my-2 ">
          <div className="w-12 rounded-full">
            <img className="rounded-full" src={news.author.img} alt="" />
          </div>
          <div>
            <p>{news?.author?.name || "N/A"}</p>
            <h3>{news?.author?.published_date?.split(" ")[0]}</h3>
          </div>
        </section>
        <section className="flex gap-3 *:text-xl">
          <IoBookmark />
          <CiShare2 />
        </section>
      </div>
      <section>
        <h3 className="text-xl font-semibold">{news?.title}</h3>
        <img className="w-full object-cover" src={news.thumbnail_url} alt="" />
        <p className="text-gray-700 text-sm mb-4">
          {news.details.slice(0, 150)}...{" "}
          <span className="text-primary">Read More</span>
        </p>
        <hr />
      </section>

      <div className="flex justify-between px-4 my-4">
        <div className="w-32 flex  gap-4">
          <Rating value={news?.rating?.number} readOnly />
          <p>{news?.rating?.number}</p>
        </div>
        <p className="flex items-center gap-2">
          <FaRegEye />
          {news?.total_view}
        </p>
      </div>
      <hr />
    </div>
  );
};

export default NewsCard;
