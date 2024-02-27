import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles["footer__google-maps"]}>
        <Image
          width={400}
          height={200}
          src="/map.PNG"
          alt="Google Maps location"
        />
      </div>

      <div className={styles["footer__contact-info"]}>
        <h2>Contact & Reservation</h2>
        <p>canaani@netvision.net.il</p>
        <p>054 - 4622258</p>
      </div>

      <div className={styles["footer__address"]}>
        <h2>Address</h2>
        <p>25 Nahal Ashalim, Kfar Adumim, 90618</p>
        <p>054 - 4622258</p>
      </div>
    </div>
  );
}
