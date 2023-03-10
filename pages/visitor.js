import clientPromise from "../lib/mongodb";

export default function Visitors({visit}) {
    return (
        <div>{visit.visitor}</div>
    )
}

export async function getStaticProps() {
    try {
        const client = await clientPromise;
        const db = client.db("article");

        const movies = await db
            .collection("article")
            .find({})
            .toArray();

        const visit = JSON.parse(JSON.stringify(movies[0]));
        db.collection("article").updateOne({"visitor":visit.visitor}, {$set:{"visitor":visit.visitor + 1}});
        return {
            props: { visit },
        };
    } catch (e) {
        console.error(e);
        return {
            props: { e },
        };
    }
} 