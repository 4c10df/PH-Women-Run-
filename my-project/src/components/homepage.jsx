import Footer from "./contents/footer";
import Header from "./contents/header";









function Homepage() {
    return (
      <>
        <div className="flex flex-col justify-center items-center relative w-full bg-gray-800">
          <Header />
          
          <Footer />
        </div>
      </>
    );
}

export default Homepage;
