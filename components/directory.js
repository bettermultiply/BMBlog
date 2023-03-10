import Date from "./date";
import styles from '../styles/Directory.module.css'

export function Direc({allPostsData}) {
    return (
        <div>
            <div className={styles.grid}>
            {allPostsData.map(({ id, pid, content, date, title }) => (
            <a href={`posts/${pid}/${id}`} className={styles.card}  key={id}>
                <h2>{title} &rarr;</h2>
                <p>{content}</p>
                <font color="grey">
                    <Date dateString={date} />
                </font>
            </a>
            ))}
            </div>
        </div>
    );
}

export function PidDirec({allPostsData}) {
    return (
            <div className={styles.grid}>
            {allPostsData.map(({ id, pid, content, date, title }) => 
                (
            <a href={`${pid}/${id}`} className={styles.card}  key={id}>
                <h2>{title} &rarr;</h2>
                <p>{content}</p>
                <font color="grey">
                    <Date dateString={date} />
                </font>
            </a>
            ))}
            <div></div>
            </div>
    );
}
