"use client";
import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";
import { RoomId, rooms } from "@/db/rooms";
import Image from "next/image";
import React from "react";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);
  const roomId = React.Children.toArray(children)[0] as RoomId;

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
        <div className={styles.room}>
          <Image
            src={rooms[roomId].imageSrc}
            height={300}
            width={350}
            alt={`${rooms[roomId].pageTitle}  `}
            className={styles.room__image}
          />
          <h2 className={styles.room__title}>{rooms[roomId].pageTitle}</h2>
          <p className={styles.room__description}>
            {rooms[roomId].description}
          </p>
        </div>
        <button onClick={onDismiss} className={styles.close_button} />
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}
