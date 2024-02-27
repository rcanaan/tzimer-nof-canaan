import styles from "./Video.module.css";

export default function Video() {
  return (
    <div className={styles["video__section"]}>
      <h2 className={styles["video__heading"]}>Our Featured Video</h2>
      <iframe
        className={styles["video__iframe"]}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ylvQ-CRlozg?si=mdSQdOckvBj538Tc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
