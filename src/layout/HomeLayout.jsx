import Header from "../components/Header/Header";
import Headline from "../components/Header/Headline";
import LeftNavbar from "../components/MainComponents/LeftNavbar";
import RightNavbar from "../components/MainComponents/RightNavbar";
import Navbar from "../components/Navbar/Navbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
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
      <main className=" w-11/12 mx-auto pt-5 grid md:grid-cols-12">
        <aside className="col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">Main content</section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
