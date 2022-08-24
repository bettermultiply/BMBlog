import styles from "../styles/Catalogue.module.css"

export default function Catalogue({allIds}) {
    return (
        <div className={styles.List}>
            <h4 className={styles.Head}>Catalogue</h4>
            <ul className={styles.UList}>
                {allIds.map(({id}) => (
                <li className={styles.Li} key={id}>
                    <a href={`/post/${id}`} className={styles.Link}>{id}</a>
                </li>
                ))}
            </ul>
        </div>
    );
}