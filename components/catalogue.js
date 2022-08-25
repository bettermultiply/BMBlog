import styles from "../styles/Catalogue.module.css"

export default function Catalogue({allDir}) {
    return (
        <div className={styles.List}>
            <h4 className={styles.Head}>Catalogue</h4>
            <div>{allDir.map(({dir}) => (
                <li className={styles.Li} key={dir}>
                    <a href={`/post/${dir}`} >{dir}</a>
                </li>
                ))}</div>
        </div>
    );
}