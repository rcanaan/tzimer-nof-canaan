import React from "react";
import styles from "./page.module.css";
import { OutdoorId, outdoors } from "@/db/outdoors";
import Image from "next/image";

export default function RoomPage({
  params: { id },
}: {
  params: { id: OutdoorId };
}) {
  return (
    <div className={styles["room-container"]}>
      <Image
        src={outdoors[id].imageSrc}
        height={300}
        width={350}
        alt={`${outdoors[id].pageTitle}  `}
        className={styles["room__image"]}
      />
      <h2>{outdoors[id].pageTitle}</h2>
      <p>{outdoors[id].description}</p>
    </div>
  );
}
