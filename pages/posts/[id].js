import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/dist/shared/lib/head";
import Link from "next/link"
import Border from "../../components/border";
import Date from "../../components/date";

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        }
    }
}

export default function Post({postData}) {
    return (
        <main>
            <Head>
                <title>{postData.title}</title>
                <meta name="description" />
                <link rel="icon" href="../../public/favicon" />
            </Head>
            <body>
                <Border />
                <h1>{postData.title}</h1>
                    <font color="grey">
                        <Date dateString={postData.date} />
                    </font>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml}} />
            </body>
        </main>
    );
}