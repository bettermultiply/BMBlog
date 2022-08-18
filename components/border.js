import styles from "../styles/Border.module.css"
import Link from "next/link";

export default function Border() {
    return (
        <div>
            <header className={styles.Header_0}>
                <div className={styles.Header_left}>
                    <a href="#">
                        <span className={styles.Logo}>Better</span>
                        <span className={styles.Logo}>~</span>
                        <span className={styles.Logo}>Multiply</span>
                    </a>
                </div>
                <div className={styles.Header_right}>
                    <span><a className={styles.sp} href='#'>Latest</a></span>
                    <span><a className={styles.sp} href='#'>Recommend</a></span>
                    <span><a className={styles.sp} href='#'>Notes</a></span>
                    <span><a className={styles.sp} href='#'>About_BM</a></span>
                </div>
            </header>
        </div>
    );
}