import LongImage from "../../components/LongImage/LongImage";
import Nav from "../../components/Nav/Nav";
import Slider from "../../components/Slider/Slider";
import Category from "../../components/Category/Category";
import AboutUs from "../../components/AboutUs/AboutUs";
import styles from "./Homepage.module.css";
import Footer from "../../components/Footer/Footer";

function Homepage() {
  return (
    <div>
      <Nav />
      <Slider />
      <div className={styles.container}>
        <LongImage
          lineOne={"Go byond the bowl"}
          lineTwo={"shop fun feeders"}
          imgURL={"/images/LongImage/long1.jpg"}
        ></LongImage>
        <Category />
        <LongImage
          lineOne={"Treat your dog healthier"}
          lineTwo={""}
          imgURL={"images/LongImage/long2.jpg"}
        ></LongImage>
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
}

export default Homepage;
