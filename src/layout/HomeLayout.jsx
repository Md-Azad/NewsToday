import Header from "../components/Header/Header";
import Headline from "../components/Header/Headline";
import Navbar from "../components/Navbar/Navbar";

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
      <nav className="w-11/12 mx-auto my-4">
        <Navbar></Navbar>
      </nav>
      <main>
        <h1>Main context will be here.</h1>
      </main>
    </div>
  );
};

export default HomeLayout;
