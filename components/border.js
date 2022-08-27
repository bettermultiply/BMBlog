import styles from "../styles/Border.module.css"
import Link from "next/link";

export default function Border() {
    return (
        <header className={styles.Header_0}>
            <div className={styles.Header_left}>
            <Link href="/">
                <a>
                    <span className={styles.Logo}>Better</span>
                    <span className={styles.Logo}>~</span>
                    <span className={styles.Logo}>Multiply</span>
                </a>
                </Link>
            </div>
            <div className={styles.Header_right}>
            <Link href='/'>
                <a className={styles.sp}>Recommend</a>
            </Link>
            <Link href='/'>
                <a className={styles.sp}>Notes</a>
            </Link>
            <Link href='/'>
                <a className={styles.sp}>About_BM</a>
            </Link>
            </div>
        </header>
    );
}