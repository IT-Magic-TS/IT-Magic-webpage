import Image from "next/image";
import styles from "./ornamental-circles.module.css";

function OrnamentalCircles() {
  return (
    <div className={styles.ornamental}>
      <div className={styles.imageContainerA}>
        <div className={styles.imageOrnamental}>
          <Image
            src="/images/main/ship-wheel-150.png"
            alt="ornamental cirlce"
            height={150}
            width={150}
          />
        </div>
      </div>
      <div className={styles.imageContainerB}>
        <div className={styles.imageOrnamental}>
          <Image
            src="/images/main/ship-wheel-150.png"
            alt="ornamental cirlce"
            height={150}
            width={150}
          />
        </div>
      </div>
      <div className={styles.imageContainerC}>
        <div className={styles.imageOrnamental}>
          <Image
            src="/images/main/ship-wheel-150.png"
            alt="ornamental cirlce"
            height={150}
            width={150}
          />
        </div>
      </div>
      <div className={styles.imageContainerD}>
        <div className={styles.imageOrnamental}>
          <Image
            src="/images/main/ship-wheel-150.png"
            alt="ornamental cirlce"
            height={150}
            width={150}
          />
        </div>
      </div>
    </div>
  );
}

export default OrnamentalCircles;
