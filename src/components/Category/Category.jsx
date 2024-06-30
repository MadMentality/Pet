import styles from "./Category.module.css";

const info = [
  { text: "GAMES", url: "public/images/Category/game.jpg" },
  { text: "GEAR IN 2025", url: "public/images/Category/gear.jpg" },
  { text: "BEDS IN 2025", url: "public/images/Category/bed.jpg" },
  { text: "BOWLS", url: "public/images/Category/bowl.jpg" },
  { text: "TREATS", url: "public/images/Category/treat.jpg" },
  { text: "CAT", url: "public/images/Category/cat.jpg" },
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
