import styles from "../styles/Catalogue.module.css"

export default function Catalogue({allIds}) {
    return (
        <div className={styles.List}>
            <h4 className={styles.Head}>Catalogue</h4>
            <ul className={styles.UList}>
                {allIds.map(({id,c,s,i}) => (
                <li key={id}>{id}</li>
                ))}
            </ul>
        </div>
    );
}