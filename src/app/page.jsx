import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <Image
          src={"/smallLogo.png"}
          alt="smallLogo"
          width={63}
          height={63}
          style={{ marginBottom: "1.8em" }}
        />
        <h1 className={styles.title}>Food for Everyone</h1>
      </div>
      <div className={styles.girlVectorContainer}>
        <Image
          src={"/girlVector.png"}
          alt="girlVector"
          fill
          className={styles.girlVector}
        />
      </div>

      <div className={styles.boyVectorContainer}>
        <Image
          src={"/boyVector.png"}
          alt="boyVector"
          fill
          className={styles.boyVector}
        />
      </div>
      <button className={styles.startBtn}>Get started</button>
    </div>
  );
}
