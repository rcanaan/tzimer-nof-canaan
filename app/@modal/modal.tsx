"use client";
import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";
import { RoomId, rooms } from "@/db/rooms";
import Image from "next/image";
import React from "react";
import { OutdoorId } from "@/db/outdoors";
import { Rooms } from "@/db/rooms";
import { Outdoors } from "@/db/outdoors";
type ModalProps = {
  id: RoomId | OutdoorId;
  data: Rooms | Outdoors;
  isRoom?: boolean;
};

function isRoomId(id: RoomId | OutdoorId): id is RoomId {
  return rooms.hasOwnProperty(id);
}
function isOutdoorId(id: RoomId | OutdoorId): id is OutdoorId {
  return !isRoomId(id);
}
export function Modal({ id, data, isRoom }: ModalProps) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);
  // const d = isRoom ? data[id as RoomId] : data[id as OutdoorId];
  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  let imageSrc = "";
  let pageTitle = "";
  let description = "";

  if (isRoomId(id)) {
    const roomData = data as Rooms;
    imageSrc = roomData[id].imageSrc;
    pageTitle = roomData[id].pageTitle;
    description = roomData[id].description;
  } else {
    const outdoorData = data as Outdoors;
    imageSrc = outdoorData[id].imageSrc;
    pageTitle = outdoorData[id].pageTitle;
    description = outdoorData[id].description;
  }

  return createPortal(
    <div className={styles.modal_backdrop}>
      <dialog ref={dialogRef} className={styles.modal} onClose={onDismiss}>
        <div className={styles.modal_content}>
          <Image
            src={imageSrc}
            height={300}
            width={350}
            alt={`${pageTitle}`}
            className={styles.room__image}
          />
          <h2 className={styles.room__title}>{pageTitle}</h2>
          <p className={styles.room__description}>{description}</p>
        </div>
        <button onClick={onDismiss} className={styles.close_button} />
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}
