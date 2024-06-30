import LongImage from "../../components/LongImage/LongImage";
import Nav from "../../components/Nav/Nav";
import Slider from "../../components/Slider/Slider";
import Category from "../../components/Category/Category";
import AboutUs from "../../components/AboutUs/AboutUs";
import styles from "./Homepage.module.css";
import Footer from "../../components/Footer/Footer";
import long1 from "../../../public/static/images/LongImage/long1.jpg";

function Homepage() {
  return (
    <div>
      <Nav />
      <Slider />
      <div className={styles.container}>
        <LongImage
          lineOne={"Go byond the bowl"}
          lineTwo={"shop fun feeders"}
          imgURL={long1}
        ></LongImage>
        <Category />
        <LongImage
          lineOne={"Treat your dog healthier"}
          lineTwo={""}
          imgURL={"/static/images/LongImage/long2.jpg"}
        ></LongImage>
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
}

export default Homepage;
