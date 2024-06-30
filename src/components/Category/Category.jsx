import styles from "./Category.module.css";
import gameImg from "../../../public/static/images/Category/game.jpg";
import gearImg from "../../../public/static/images/Category/gear.jpg";
import bedImg from "../../../public/static/images/Category/bed.jpg";
import bowlImg from "../../../public/static/images/Category/bowl.jpg";
import treatImg from "../../../public/static/images/Category/treat.jpg";
import catImg from "../../../public/static/images/Category/cat.jpg";

const info = [
  { text: "GAMES", url: `${gameImg}` },
  { text: "GEAR IN 2025", url: `${gearImg}` },
  { text: "BEDS IN 2025", url: `${bedImg}` },
  { text: "BOWLS", url: `${bowlImg}` },
  { text: "TREATS", url: `${treatImg}` },
  { text: "CAT", url: `${catImg}` },
];

function ThreeImageSet() {
  return (
    <div className={styles.root}>
      <div>
        <img src={info[0].url} alt={info[0].text}></img>
        <button> SHOP {info[0].text}</button>
      </div>
      <div>
        <img src={info[1].url} alt={info[1].text}></img>
        <button> SHOP {info[1].text}</button>
      </div>
      <div>
        <img src={info[2].url} alt={info[2].text}></img>
        <button> SHOP {info[2].text}</button>
      </div>
      <div>
        <img src={info[3].url} alt={info[3].text}></img>
        <button> SHOP {info[3].text}</button>
      </div>
      <div>
        <img src={info[4].url} alt={info[4].text}></img>
        <button> SHOP {info[4].text}</button>
      </div>
      <div>
        <img src={info[5].url} alt={info[5].text}></img>
        <button> SHOP {info[5].text}</button>
      </div>
    </div>
  );
}

export default ThreeImageSet;
