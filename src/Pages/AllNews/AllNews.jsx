import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const AllNews = () => {
  const { data: news } = useLoaderData();
  console.log(news);
  return (
    <div>
      <h2 className="text-xl font-semibold">
        Dragon News Home ({news.length}){" "}
      </h2>
      <div>
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default AllNews;
