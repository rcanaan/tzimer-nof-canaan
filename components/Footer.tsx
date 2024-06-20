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

        <div className={styles["footer__first-icon"]}>
          <Link
            href="https://maps.app.goo.gl/99KxHvx2ysnmEazQ9"
            className="footer__link"
          >
            <div className={styles["footer__icons"]}>
              <WhatsAppIcon />
            </div>
            <p>054 - 4622258</p>
          </Link>
        </div>

        <div className={styles["footer__first-icon"]}>
          <Link
            href="https://maps.app.goo.gl/99KxHvx2ysnmEazQ9"
            className="footer__link"
          >
            <div className={styles["footer__icons"]}>
              <MailOutlineIcon />
            </div>
            <p>canaani@netvision.net.il</p>
          </Link>
        </div>
      </div>

      {/* <div className={styles["footer__google-maps"]}>
        <Link href="https://www.booking.com/hotel/il/x-xxps-xx-xc-x-nof-canaan.he.html?aid=304142&label=gen173nr-1FCAQoggI49ANIDlgEaGqIAQGYAQ64ARfIAQzYAQHoAQH4AQKIAgGoAgO4Aq2a-a4GwAIB0gIkMzJjZWY0ZTctZWRiZi00MWUyLWEwMDgtZDY3OGU2NzBmZmZm2AIF4AIB&sid=c6f9a76c51f8fc0fc3e06022cc2384dd&checkin=2024-02-27;checkout=2024-02-28;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;soh=1;sr_order=popularity;srepoch=1709067635;srpvid=d60893af1c77048f;type=total;ucfs=1&#map_opened-hotel_header">
          <Image
            width={400}
            height={200}
            src="/map.PNG"
            alt="Google Maps location"
          />
        </Link>
      </div> */}
    </div>
  );
}
