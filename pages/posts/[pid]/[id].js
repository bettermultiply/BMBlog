import { getAllPostIds, getPostData} from "../../../lib/posts";
import Head from "next/dist/shared/lib/head";
import Link from "next/link"
import Border from "../../../components/border";
import Date from "../../../components/date";
import styles from "../../../styles/article.module.css"
import path from "path"

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params}) {
    const postData = await getPostData(params.pid, params.id);
    return {
        props: {
            postData,
        }
    }
}

export default function Post({postData}) {
    return (
        <html>
            <Head>
                <title>{postData.title}</title>
                <meta name="description" />
                <link rel="icon" href="../../public/favicon" />
            </Head>
            
            <body className={styles.Body}>
                <Border />
                <main className={styles.Main}>
                <h1 className={styles.Title}>{postData.title}</h1>
                    <font className={styles.Date}>
                        <Date dateString={postData.date} />
                        <div className={styles.Space}> </div>
                    </font>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml}} className={styles.Content}></div>
                </main>
            </body>
        </html>
    );
}