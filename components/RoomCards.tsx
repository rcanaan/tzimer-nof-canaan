"use client";
import styles from "./RoomCards.module.css";
import { rooms } from "../db/rooms";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useScreenSize from "@/hooks/useScreenSize";
import RoomCardsMobile from "./RoomCardsMobile";
import RoomCardsDesktop from "./RoomCardsDesktop";

export default function RoomCards() {
  const { width } = useScreenSize();
  return (
    <>
      <h2 className={styles["room-cards__main-heading"]}>The Rooms</h2>
      {width > 1023 ? (
        <RoomCardsDesktop rooms={rooms} />
      ) : (
        <RoomCardsMobile rooms={rooms} />
      )}
    </>
  );
}
