import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import nofCanaanLogoTransparent from "/public/temp.svg";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className="footer__logo">
        <Link href="/">
          <Image
            src={nofCanaanLogoTransparent}
            alt="Nof Canaan Logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div className={styles["footer__details"]}>
        {/* location */}
        <div className={styles["footer__first-icon"]}>
          <Link
            href="https://maps.app.goo.gl/99KxHvx2ysnmEazQ9"
            className="footer__link"
          >
            <div className={styles["footer__icons"]}>
              <LocationOnIcon fontSize={"medium"} />
            </div>
            <p>Kfar Adumim</p>
          </Link>
        </div>

        {/* email */}
        <div className={styles["footer__first-icon"]}>
          <div className={styles["footer__icons"]}>
            <MailOutlineIcon />
          </div>
          <p>canaani@netvision.net.il</p>
        </div>

        {/* whats app */}
        <div className={styles["footer__first-icon"]}>
          <div className={styles["footer__icons"]}>
            <WhatsAppIcon />
          </div>
          <p>054 - 4622258</p>
        </div>
      </div>
    </div>
  );
}
