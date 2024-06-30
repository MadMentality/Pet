import styles from "./Slider.module.css";
import { useEffect, useState } from "react";

const album = [
  {
    url: "src/images/Slider/slider0.jpg",
    title: "dog0",
  },
  {
    url: "src/images/Slider/slider1.jpg",
    title: "dog1",
  },
  {
    url: "src/images/Slider/slider2.jpg",
    title: "dog2",
  },
  {
    url: "src/images/Slider/slider3.jpg",
    title: "dog3",
  },
  {
    url: "src/images/Slider/slider4.jpg",
    title: "dog4",
  },
  {
    url: "src/images/Slider/slider5.jpg",
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
