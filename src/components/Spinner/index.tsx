import styles from "./styles.module.css";

export interface SpinnerProps {
  className?: string;
}

export function Spinner({ className }: SpinnerProps) {
  return (
    <div
      className={`${styles.cubeGrid} aspect-square ${className ?? ""}`}
      aria-label="Generating PDF Resume"
      role="status"
    >
      <div className={`${styles.cube} ${styles.cube1}`}></div>
      <div className={`${styles.cube} ${styles.cube2}`}></div>
      <div className={`${styles.cube} ${styles.cube3}`}></div>
      <div className={`${styles.cube} ${styles.cube4}`}></div>
      <div className={`${styles.cube} ${styles.cube5}`}></div>
      <div className={`${styles.cube} ${styles.cube6}`}></div>
      <div className={`${styles.cube} ${styles.cube7}`}></div>
      <div className={`${styles.cube} ${styles.cube8}`}></div>
      <div className={`${styles.cube} ${styles.cube9}`}></div>
    </div>
  );
}
