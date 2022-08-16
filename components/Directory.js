export function Direc({ allPostsData }) {
    return (
        <div>
            <h2>Blog</h2>
            <ul>
            {allPostsData?.map(({ id, date, title }) => (
                <li key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
                </li>
            ))}
            </ul>
        </div>
    );
}