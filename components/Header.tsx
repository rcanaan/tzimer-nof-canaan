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
      {/* <head>
        <link rel="shortcut icon" href="/nofCanaanIcon.ico" />
      </head> */}
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
          <Link href="https://www.booking.com/searchresults.he.html">
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
