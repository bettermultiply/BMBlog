import styles from '../pages/styles/i.module.css'
import Date from './date';

export function Direc({ allPostsData }) {
    return (
        <div>
        <div>
            {allPostsData?.map(({ id, date, title }) => (
                <a href={`/posts/${id}`}>
                <div key={id} className={styles.card}>
                <h2>{id} &rarr;</h2>
                <Date dateString={date} />
                <p>{title}</p>
                </div>
                </a>
            ))}
        </div>
        </div>
    );
}