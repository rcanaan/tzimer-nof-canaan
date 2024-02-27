import Link from "next/link";
import Image from "next/image";
import styles from "./RoomCards.module.css";
import { Rooms } from "@/db/rooms";

type RoomCardsProps = {
  rooms: Rooms;
};

export default function RoomCards({ rooms }: RoomCardsProps) {
  return (
    <>
      <h2 className={styles["room-cards__main-heading"]}>The Rooms</h2>
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
