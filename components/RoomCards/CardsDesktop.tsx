import Link from "next/link";
import Image from "next/image";
import styles from "./CardsDesktop.module.css";
import { Rooms } from "@/db/rooms";
import { Outdoors } from "@/db/outdoors";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type CardsDesktopProps = {
  cards: Rooms | Outdoors;
};

export default function RoomCardsDesktop({ cards }: CardsDesktopProps) {
  return (
    <>
      <div className={styles["room-cards"]}>
        {Object.entries(cards).map(([cardId, card]) => (
          <Link
            className={styles["room-card"]}
            key={cardId}
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
              className={styles["room-card__image"]}
            />
            <div className={styles["room-card__id"]}>{cardId}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
