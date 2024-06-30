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
          imgURL={"src/images/LongImage/long1.jpg"}
        ></LongImage>
        <Category />
        <LongImage
          lineOne={"Treat your dog healthier"}
          lineTwo={""}
          imgURL={
            "https://images.unsplash.com/photo-1488569098285-adeecb95641f?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ></LongImage>
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
}

export default Homepage;
