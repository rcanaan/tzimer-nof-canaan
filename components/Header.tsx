"use client";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import nofCanaanLogoTransparent from "/public/temp.svg";
import { usePathname } from "next/navigation";

const imagePaths = [
  "/backg.jpg",
  // "/panoramicRoomView.jpg",
  // "/IMG-20240209-WA0087.jpg",
  // "/IMG-20240209-WA0089.jpg",
];

export default function Header() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const pathname = usePathname();
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <header
        className={styles.header}
        style={{ backgroundImage: `url(${imagePaths[currentImageIndex]})` }}
      >
        <div className={styles["header__headline"]}>
          <div
            className={`${styles.header__menu_button_container} ${styles.menu_desktop}`}
          >
            <button className={`${styles.header__menu_button}`}>
              <svg
                className={styles["header__menu-button-svg"]}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
              MENU
            </button>
          </div>
          <div className={styles["header__logo-container"]}>
            <Link href="/">
              <Image
                src={nofCanaanLogoTransparent}
                alt="Nof Canaan Logo"
                width={140}
                height={140}
              />
            </Link>
          </div>

          <div
            className={`${styles.header__menu_button_container} ${styles.reserve_desktop}`}
          >
            <Link href="https://www.booking.com/hotel/il/x-xxps-xx-xc-x-nof-canaan.he.html?aid=318615&label=Hebrew_Israel_HE_IL_29562091225-P2ZgyYwfHvP_1cUgTwurGAS217274481245%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55168806993%3Atidsa-321568232789%3Alp1007991%3Ali%3Adec%3Adm&sid=c6f9a76c51f8fc0fc3e06022cc2384dd&all_sr_blocks=32557401_114766732_2_0_0;checkin=2024-02-28;checkout=2024-02-29;dest_id=900049179;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=32557401_114766732_2_0_0;hpos=1;matching_block_id=32557401_114766732_2_0_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=32557401_114766732_2_0_0__52650;srepoch=1709110391;srpvid=92013e78fad8001a;type=total;ucfs=1&#hotelTmpl">
              <button className={`${styles.header__menu_button}`}>
                RESERVE NOW
              </button>
            </Link>
          </div>
        </div>
        {pathname === "/" && (
          <main className={styles["header__main"]}>
            <div className={styles["header__main-title"]}>
              <h1 className={styles["header__main-heading"]}>
                Unwind in Luxury: Discover Our Exquisite Hotel and Resort
              </h1>
              <button className={styles["header__get-started"]}>
                GET STARTED <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </main>
        )}
      </header>
    </>
  );
}
