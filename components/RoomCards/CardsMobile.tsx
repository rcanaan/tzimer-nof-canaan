"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./CardsMobile.module.css";
import { Rooms } from "@/db/rooms";
import { Outdoors } from "@/db/outdoors";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

type CardsMobileProps = {
  cards: Rooms | Outdoors;
};

export default function CardsMobile({ cards }: CardsMobileProps) {
  return (
    <>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={true}
        showIndicators={false}
        autoPlay={false}
        infiniteLoop={true}
        className={styles["carousel"]}
      >
        {Object.entries(cards).map(([cardId, card]) => (
          <div key={cardId} className={styles["card"]}>
            <Link
              href={
                card.type === "room"
                  ? `/rooms/${cardId}`
                  : card.type === "outdoor"
                  ? `/outdoors/${cardId}`
                  : `/`
              }
              passHref
            >
              <Image
                src={card.imageSrc}
                height={300}
                width={350}
                alt={`${cardId} room`}
                className={styles["card__image"]}
              />
              <div className={styles["card__id"]}>{cardId}</div>
            </Link>
          </div>
        ))}
      </Carousel>
    </>
  );
}
