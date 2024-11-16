import { useEffect, useState } from "react";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <h1>All Caterogy ({categories.length})</h1>
      <div className="flex flex-col justify-start items-start pl-8 space-y-2 mt-8">
        {categories.map((category) => (
          <button className="btn bg-base-300 w-2/3" key={category.category_id}>
            {category.category_name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
