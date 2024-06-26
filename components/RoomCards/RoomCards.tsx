"use client";
import styles from "./RoomCards.module.css";
import { rooms } from "../../db/rooms";
import { outdoors } from "../../db/outdoors";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardsMobile from "./CardsMobile";
import CardsDesktop from "./CardsDesktop";

export default function RoomCards() {
  return (
    <>
      <div className={styles.desktop}>
        <h2 className={styles["room-cards__main-heading"]}>The Rooms</h2>
        <CardsDesktop cards={rooms} />
        <h2 className={styles["room-cards__main-heading"]}>
          Outdoor Activities
        </h2>

        <CardsDesktop cards={outdoors} />
      </div>

      <div className={styles.mobile}>
        <h3 className={styles["room-cards__main-heading"]}>The Rooms</h3>
        <CardsMobile cards={rooms} />
        <h3 className={styles["room-cards__main-heading"]}>
          Outdoor Activities
        </h3>
        <CardsMobile cards={outdoors} />
      </div>
    </>
  );
}
