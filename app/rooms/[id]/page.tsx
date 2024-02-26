import React from "react";
import styles from "./page.module.css";
import { RoomId, rooms } from "@/db/rooms";
import Image from "next/image";

export default function RoomPage({
  params: { id },
}: {
  params: { id: RoomId };
}) {
  return (
    <div className={styles.roomContainer}>
      <Image
        src={rooms[id].imageSrc}
        height={300}
        width={350}
        alt={`${rooms[id].pageTitle}  `}
        className={styles.roomImage}
      />
      <h2>{rooms[id].pageTitle}</h2>
      <p>{rooms[id].description}</p>
    </div>
  );
}
