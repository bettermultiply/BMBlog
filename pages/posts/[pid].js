import Head from "next/dist/shared/lib/head";
import { getAllPostDir, getDirPostData, getPostDir } from "../../lib/posts";
import Border from "../../components/border";
import Catalogue from "../../components/catalogue";
import styles from "../../styles/PostsDirectory.module.css"

export async function getStaticPaths() {
    const paths = getAllPostDir();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    const pid = params.pid;
    const allDir = getPostDir();
    const allPostsData = getDirPostData(pid);
    return {
        props: {
            allPostsData,
            allDir,
            pid,
        },
    };
}


export default function Post(props) {
    const {allPostsData, allDir, pid} = props;
    return (
        <main>
        <Head>
            <title>{pid}</title>
            <meta name="description" />
            <link rel="icon" href="../../public/favicon" />
        </Head>
        <body>
            <Border />
            <div className={styles.Catalogue} >
                <Catalogue allDir={allDir}/>
            </div>
        </body>
    </main>
    )
}