import Link from "next/link";
import Image from "next/image";
import styles from "./OutdoorCards.module.css"; // Ensure your CSS module is named appropriately
import { Outdoors } from "@/db/outdoors";

type OutdoorCardsProps = {
  outdoors: Outdoors;
};

export default function OutdoorCards({ outdoors }: OutdoorCardsProps) {
  return (
    <>
      <h2 className={styles["outdoor-cards__heading"]}>Outdoor Activities</h2>
      <div className={styles["outdoor-cards__container"]}>
        {Object.entries(outdoors).map(([outdoorId, outdoor]) => (
          <Link
            className={styles["outdoor-cards__card"]}
            key={outdoorId}
            href={`/outdoors/${outdoorId}`}
            passHref
          >
            <Image
              src={outdoor.imageSrc}
              height={300}
              width={350}
              alt={`${outdoorId} outdoor`}
              className={styles["outdoor-cards__image"]}
            />
            <div className={styles["outdoor-cards__id"]}>{outdoorId}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
