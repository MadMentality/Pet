import styles from "./Slider.module.css";
import { useEffect, useState } from "react";
import dog0 from "../../../public/static/images/Slider/slider0.jpg";
import dog1 from "../../../public/static/images/Slider/slider1.jpg";
import dog2 from "../../../public/static/images/Slider/slider2.jpg";
import dog3 from "../../../public/static/images/Slider/slider3.jpg";
import dog4 from "../../../public/static/images/Slider/slider4.jpg";
import dog5 from "../../../public/static/images/Slider/slider5.jpg";

const album = [
  {
    url: `${dog0}`,
    title: "dog0",
  },
  {
    url: `${dog1}`,
    title: "dog1",
  },
  {
    url: `${dog2}`,
    title: "dog2",
  },
  {
    url: `${dog3}`,
    title: "dog3",
  },
  {
    url: `${dog4}`,
    title: "dog4",
  },
  {
    url: `${dog5}`,
    title: "dog5",
  },
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const isLastSlide = currentIndex === album.length - 1;
    const newSlide = isLastSlide ? 0 : currentIndex + 1;
    const intervalId = setInterval(() => {
      setCurrentIndex(() => newSlide);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, setCurrentIndex]);

  return (
    <div>
      <div className={styles.root}>
        <div
          className={styles.slider}
          style={{ backgroundImage: `url(${album[currentIndex].url})` }}
        ></div>
        <div className={styles.dotContainer}>
          {album.map((albumImg, index) => (
            <div key={index} onClick={() => setCurrentIndex(index)}>
              {index === currentIndex ? `\u25CF` : `\u25CB`}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
