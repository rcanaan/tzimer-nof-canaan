"use client";
import styles from "./RoomCards.module.css";
import { Rooms } from "@/db/rooms";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useScreenSize from "@/hooks/ScreenSize";
import RoomCardsMobile from "./RoomCardsMobile";
import RoomCardsDesktop from "./RoomCardsDesktop";

type RoomCardsProps = {
  rooms: Rooms;
};

export default function RoomCards({ rooms }: RoomCardsProps) {
  const { width } = useScreenSize();
  return (
    <>
      <div>
        <h2 className={styles["room-cards__main-heading"]}>The Rooms</h2>
        {width > 1023 ? (
          <RoomCardsDesktop rooms={rooms} />
        ) : (
          <RoomCardsMobile rooms={rooms} />
        )}
      </div>
    </>
  );
}
