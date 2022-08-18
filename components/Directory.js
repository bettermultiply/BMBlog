import Date from "./date";

export function Direc({ allPostsData }) {
    return (
        <div>
            <h2>Blog</h2>
            <ul>
            {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                {title}
                <br />
                {id}
                <br />
                <font color="grey">
                    <Date dateString={date} />
                </font>
                </li>
            ))}
            </ul>
        </div>
    );
}