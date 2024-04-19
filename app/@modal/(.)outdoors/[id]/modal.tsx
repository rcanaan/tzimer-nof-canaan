"use client";
import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";
import { OutdoorId, outdoors } from "@/db/outdoors";
import Image from "next/image";
import React from "react";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);
  const outdoorId = React.Children.toArray(children)[0] as OutdoorId;

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
            src={outdoors[outdoorId].imageSrc}
            height={300}
            width={350}
            alt={`${outdoors[outdoorId].pageTitle}  `}
            className={styles.room__image}
          />
          <h2 className={styles.room__title}>
            {outdoors[outdoorId].pageTitle}
          </h2>
          <p className={styles.room__description}>
            {outdoors[outdoorId].description}
          </p>
        </div>
        <button onClick={onDismiss} className={styles.close_button} />
      </dialog>
    </div>,
    document.getElementById("modal-outdoor-root")!
  );
}
