import styles from "./Video.module.css";

export default function Video() {
  return (
    <div className={styles["video__section"]}>
      <h2 className={styles["video__heading"]}>Our Featured Video</h2>
      <div className={styles["video__wrapper"]}>
        <iframe
          className={styles["video__iframe"]}
          src="https://www.youtube.com/embed/ylvQ-CRlozg?si=mdSQdOckvBj538Tc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
