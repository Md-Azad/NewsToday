import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
          <NavLink
            to={`/category/${category.category_id}`}
            key={category.category_id}
            className="btn bg-base-100 w-2/3  hover:bg-green-500"
          >
            <button>{category.category_name}</button>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
