import Link from "next/link";
import Image from "next/image";
import styles from "./OutdoorCards.module.css";
import { Outdoors } from "@/db/outdoors";
type OutdoorCardsProps = {
  outdoors: Outdoors;
};
export default function Outdoor({ outdoors }: OutdoorCardsProps) {
  return (
    <>
      <h2 className={styles.mainHeading}>Outdoor Activities</h2>
      <div className={styles.outdoorContainer}>
        {Object.entries(outdoors).map(([outdoorId, outdoor]) => (
          <Link
            className={styles.card}
            key={outdoorId}
            href={`/outdoors/${outdoorId}`}
            passHref
          >
            <Image
              src={outdoor.imageSrc}
              height={300}
              width={350}
              alt={`${outdoorId} outdoor `}
              className={styles.roomImage}
            />
            <div className={styles.roomId}>{outdoorId}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
