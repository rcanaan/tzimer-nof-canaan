import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles["footer__google-maps"]}>
        <Link href="https://www.booking.com/hotel/il/x-xxps-xx-xc-x-nof-canaan.he.html?aid=304142&label=gen173nr-1FCAQoggI49ANIDlgEaGqIAQGYAQ64ARfIAQzYAQHoAQH4AQKIAgGoAgO4Aq2a-a4GwAIB0gIkMzJjZWY0ZTctZWRiZi00MWUyLWEwMDgtZDY3OGU2NzBmZmZm2AIF4AIB&sid=c6f9a76c51f8fc0fc3e06022cc2384dd&checkin=2024-02-27;checkout=2024-02-28;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;soh=1;sr_order=popularity;srepoch=1709067635;srpvid=d60893af1c77048f;type=total;ucfs=1&#map_opened-hotel_header">
          <Image
            width={400}
            height={200}
            src="/map.PNG"
            alt="Google Maps location"
          />
        </Link>
      </div>

      <div className={styles["footer__details"]}>
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
    </div>
  );
}
