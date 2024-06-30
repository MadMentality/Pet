import styles from "./LongImage.module.css";

function LongImage({ lineOne, lineTwo, imgURL }) {
  return (
    <div className={styles.root}>
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${imgURL})` }}
      >
        <p>{lineOne}</p>
        <p>{lineTwo}</p>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
}

export default LongImage;
