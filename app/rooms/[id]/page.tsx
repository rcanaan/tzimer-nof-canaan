import React from "react";
import styles from "./page.module.css"; // Ensure this is pointing to the correct CSS module file
import { RoomId, rooms } from "@/db/rooms";
import Image from "next/image";

export default function RoomPage({
  params: { id },
}: {
  params: { id: RoomId };
}) {
  return (
    <div className={styles.room}>
      <Image
        src={rooms[id].imageSrc}
        height={300}
        width={350}
        alt={`${rooms[id].pageTitle}  `}
        className={styles.room__image}
      />
      <h2 className={styles.room__title}>{rooms[id].pageTitle}</h2>
      <p className={styles.room__description}>{rooms[id].description}</p>
    </div>
  );
}
