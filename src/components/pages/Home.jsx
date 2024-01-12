import MenuBar from "../molecules/MenuBar";
import Description from "../templates/Description";
import Footer from "../templates/Footer";
import Hero from "../molecules/Hero";
import Cards from "../templates/Cards";
import ServiceArea from "../templates/ServiceArea";
import Banner from "../molecules/Banner";

const Home = () => {
  return (
    <>
      <MenuBar />
      <Hero />
      <Description />
      <Cards />
      <Banner />
      <ServiceArea />
      <Footer />
    </>
  );
};

export default Home;
