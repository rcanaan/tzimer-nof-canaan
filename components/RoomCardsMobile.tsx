"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./RoomCardsMobile.module.css";
import { Rooms } from "@/db/rooms";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

type RoomCardsMobileProps = {
  rooms: Rooms;
};

export default function RoomCardsMobile({ rooms }: RoomCardsMobileProps) {
  return (
    <>
      {/* <div className={styles["room-cards"]}> */}
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={true}
        showIndicators={false}
        autoPlay={false}
        infiniteLoop={true}
        className={styles["room-cards"]}
      >
        {Object.entries(rooms).map(([roomId, room]) => (
          <div key={roomId} className={styles["room-card"]}>
            <Link href={`/rooms/${roomId}`} passHref>
              <Image
                src={room.imageSrc}
                height={300}
                width={350}
                alt={`${roomId} room`}
                className={styles["room-card__image"]}
              />
              <div className={styles["room-card__id"]}>{roomId}</div>
            </Link>
          </div>
        ))}
      </Carousel>
      {/* </div> */}
    </>
  );
}
