import Image from "next/image";
import styles from "./page.module.css";

import Room from "@/components/room";
import Link from "next/link";

import Outdoor from "@/components/OutdoorCards";

import { rooms } from "@/db/rooms";
import { outdoors } from "@/db/outdoors";
import RoomCards from "@/components/RoomCards";
import Video from "@/components/Video";

export default function Home() {
  rooms;
  return (
    <>
      <div className={styles.all}>
        <RoomCards rooms={rooms} />
        <Outdoor outdoors={outdoors} />
        <Video />
      </div>
    </>
  );
}
