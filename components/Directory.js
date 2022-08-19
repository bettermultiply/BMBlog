import Date from "./date";
import styles from '../styles/Home.module.css'

export function Direc({ allPostsData }) {
    return (
        <>
            {allPostsData.map(({ id, content, date, title }) => (
            <a href={`posts/${id}`} className={styles.card}>
                <h2>{title} &rarr;</h2>
                <p>{content}</p>
                <font color="grey">
                    <Date dateString={date} />
                </font>
            </a>
            ))}
        </>
    );
}