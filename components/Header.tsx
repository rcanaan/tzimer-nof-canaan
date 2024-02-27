"use client";
import { useEffect, useState } from "react";
import styles from "./Header.module.css"; // Make sure this points to your updated CSS module
import Image from "next/image";
import Link from "next/link";
import nofCanaanLogoTransparent from "/public/temp.svg";

const imagePaths = [
  "/backg.jpg",
  "/panoramicRoomView.jpg",
  "/IMG-20240209-WA0087.jpg",
  "/IMG-20240209-WA0089.jpg",
];

export default function Header() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
          <button className={styles["header__menu-button"]}>
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
          <div className={styles["header__logo-container"]}>
            <Link href="/">
              <Image
                src={nofCanaanLogoTransparent}
                alt="Nof Canaan Logo"
                width={150}
                height={150}
              />
            </Link>
          </div>
          <Link href="https://www.booking.com/hotel/il/x-xxps-xx-xc-x-nof-canaan.he.html?aid=304142&label=gen173nr-1FCAQoggI49ANIDlgEaGqIAQGYAQ64ARfIAQzYAQHoAQH4AQKIAgGoAgO4Aq2a-a4GwAIB0gIkMzJjZWY0ZTctZWRiZi00MWUyLWEwMDgtZDY3OGU2NzBmZmZm2AIF4AIB&sid=c6f9a76c51f8fc0fc3e06022cc2384dd&checkin=2024-02-27;checkout=2024-02-28;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;soh=1;sr_order=popularity;srepoch=1709067635;srpvid=d60893af1c77048f;type=total;ucfs=1&#no_availability_msg">
            <button className={styles["header__menu-button"]}>
              RESERVE NOW
            </button>
          </Link>
        </div>
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
      </header>
    </>
  );
}
