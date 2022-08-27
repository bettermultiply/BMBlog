import styles from "../styles/Catalogue.module.css"

export default function Catalogue({allDir}) {
    return (
        <div className={styles.List}>
            <h4 className={styles.Head}>Catalogue</h4>
            <div>{allDir.map(({pid}) =>         
                (<li className={styles.Li} key={pid}>
                    <a href={`/posts/${pid}`} >{pid}</a>
                </li>
                ))}
            </div>
        </div>
    );
}