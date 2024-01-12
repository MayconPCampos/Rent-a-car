import MenuBar from "../molecules/MenuBar";
import Description from "../templates/Description";
import Footer from "../templates/Footer";
import Hero from "../molecules/Hero";
import Cards from "../templates/Cards";
import ServiceArea from "../templates/ServiceArea";

const Home = () => {
  return (
    <>
      <MenuBar />
      <Hero />
      <Description />
      <Cards />
      <ServiceArea />
      <Footer />
    </>
  );
};

export default Home;
