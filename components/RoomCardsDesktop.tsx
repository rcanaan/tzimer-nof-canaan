import Link from "next/link";
import Image from "next/image";
import styles from "./RoomCardsDesktop.module.css";
import { Rooms } from "@/db/rooms";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type RoomCardsDesktopProps = {
  rooms: Rooms;
};

export default function RoomCardsDesktop({ rooms }: RoomCardsDesktopProps) {
  return (
    <>
      <div className={styles["room-cards"]}>
        {Object.entries(rooms).map(([roomId, room]) => (
          <Link
            className={styles["room-card"]}
            key={roomId}
            href={`/rooms/${roomId}`}
            passHref
          >
            <Image
              src={room.imageSrc}
              height={300}
              width={350}
              alt={`${roomId} room`}
              className={styles["room-card__image"]}
            />
            <div className={styles["room-card__id"]}>{roomId}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
