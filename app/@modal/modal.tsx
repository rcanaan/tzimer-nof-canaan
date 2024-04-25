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

  return createPortal(
    <div className={styles.modal_backdrop}>
      <dialog ref={dialogRef} className={styles.modal} onClose={onDismiss}>
        <div className={styles.modal_content}>
          <Image
            src={data[id].imageSrc}
            height={300}
            width={350}
            alt={`${data[id].pageTitle}  `}
            className={styles.room__image}
          />
          <h2 className={styles.room__title}>{data[id].pageTitle}</h2>
          <p className={styles.room__description}>{data[id].description}</p>
        </div>
        <button onClick={onDismiss} className={styles.close_button} />
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}
