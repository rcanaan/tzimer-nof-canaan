"use client";
import { useEffect, useState } from "react";
// import styles from "../app/layout.module.css";
import styles from "./Header.module.css";
import Image from "next/image";
import Head from "next/head";

import nofCanaanLogoTransparent from "/public/temp.svg";
import Link from "next/link";

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
      <head>
        <link rel="shortcut icon" href="/nofCanaanIcon.ico" />
      </head>

      <header
        className={styles.header}
        style={{ backgroundImage: `url(${imagePaths[currentImageIndex]})` }}
      >
        <div className={styles.headline}>
          {/* menu as component */}
          <button className={styles.menuButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
            MENU
          </button>
          {/* mainLogo as component */}

          <div className={styles.logoContainer}>
            <Link href="/">
              <Image
                src={nofCanaanLogoTransparent}
                alt="Nof Canaan Logo"
                width={150}
                height={150}
              />
            </Link>
          </div>

          <Link href="https://www.booking.com/searchresults.he.html?aid=318615&label=Hebrew_Israel_HE_IL_29562091225-P2ZgyYwfHvP_1cUgTwurGAS217274481245%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55168806993%3Atidsa-321568232789%3Alp2376%3Ali%3Adec%3Adm&gclid=Cj0KCQiA5-uuBhDzARIsAAa21T9vXNNea3oam-bdqKYBG0k-NwK6ryqJ7fpxlXaZYJPUoDSBxjMbIOAaAlAJEALw_wcB&highlighted_hotels=325574&redirected=1&city=900049179&hlrd=no_dates&source=hotel&expand_sb=1&keep_landing=1&sid=c6f9a76c51f8fc0fc3e06022cc2384dd?">
            <button className={styles.menuButton}>RESERVE NOW </button>
          </Link>
        </div>
        <main className={styles.main}>
          <div className={styles.mainTitle}>
            <h1 className={styles.mainHeading}>
              Unwind in Luxury: Discover Our Exquisite Hotel and Resort
            </h1>
            <button className={styles.getStarted}>
              GET STARTED <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          {/* <div className={styles.coordinate}>3.2028° N, 73.2207° E</div> */}
        </main>
      </header>
    </>
  );
}
