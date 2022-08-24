import Date from "./date";
import Catalogue from "./catalogue";
import styles from '../styles/Directory.module.css'

export function Direc({ allPostsData, allIds }) {
    return (
        <div className={styles.Catalogue}>
            <div className={styles.grid}>
            {allPostsData.map(({ id, content, date, title }) => (
            <a href={`posts/${id}`} className={styles.card}  key={id}>
                <h2>{title} &rarr;</h2>
                <p>{content}</p>
                <font color="grey">
                    <Date dateString={date} />
                </font>
            </a>
            ))}
            </div>
            <Catalogue allIds={allPostsData}/>
        </div>
    );
}