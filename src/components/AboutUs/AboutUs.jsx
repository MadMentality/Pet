import { useEffect, useState } from "react";
import styles from "./AboutUs.module.css";

const textSlid = [
  {
    text: "We're not just your run-of-the-mill pet store; we're the maestros of creating laughter, tail wiggles, and unforgettable memories between pets and their owners.",
  },
  {
    text: "TacitPet Inc. isn't just about kibble and toys; it's about turning ordinary moments into extraordinary ones. We've got tails wagging and whiskers twitching. ",
  },
  {
    text: "We're design wizards! Our squad includes industrial designers and product engineers with a knack for crafting pet products that are as functional as they are fabulous.",
  },
  {
    text: "Yep, we're not just active under the Canada Business Corporations 🍁 Act since June 12, 2023; we're actively committed to making your pet parenting journey smoother, sillier, and more sensational.",
  },
];

function AboutUs() {
  const [currentText, setCurrentText] = useState(textSlid[0].text);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const isLastSlide = currentIndex === textSlid.length - 1;
    const newSlide = isLastSlide ? 0 : currentIndex + 1;
    const intervalId = setInterval(() => {
      setCurrentIndex(() => newSlide);
      setCurrentText(() => textSlid[newSlide].text);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentIndex, setCurrentIndex, setCurrentText]);
  return (
    <div className={styles.root}>
      <div>
        <img src="public/images/Nav/logo-trans.png" alt="logo" />
        <p className={styles.title}>About Us</p>
        <div className={styles.container}>
          <button
            className={styles.leftArrow}
            onClick={() => {
              const isFristSlide = currentIndex === 0;
              const newIndex = isFristSlide
                ? textSlid.length - 1
                : currentIndex - 1;
              setCurrentIndex(newIndex);
              setCurrentText(() => textSlid[currentIndex].text);
            }}
          >
            &lt;
          </button>
          <p>{currentText}</p>
          <button
            className={styles.rightArrow}
            onClick={() => {
              const isLastSlide = currentIndex === textSlid.length - 1;
              const newIndex = isLastSlide ? 0 : currentIndex + 1;
              setCurrentIndex(newIndex);
              setCurrentText(() => textSlid[currentIndex].text);
            }}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
