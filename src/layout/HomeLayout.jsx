import Header from "../components/Header/Header";
import Headline from "../components/Header/Headline";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="bg-base-300 w-11/12 mx-auto flex  items-center gap-2">
          <p className="bg-[#D72050] text-white px-2 py-1 rounded">Latest:</p>
          <Headline></Headline>
        </section>
      </header>
      <nav>my navbar will be here.</nav>
      <main>
        <h1>Main context will be here.</h1>
      </main>
    </div>
  );
};

export default HomeLayout;
