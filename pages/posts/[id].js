import {getAllPostIds, getPostData} from '../../lib/posts';
import Head from 'next/dist/shared/lib/head';
import Date from '../../components/date';

export default function Post({postData}) {
    return ( 
        <div> 
            <Head>
                <title>{postData.title}</title>
            </Head>     
        <div>
            {postData.title}
            <br />
            {postData.id}
            <br />
            <Date dateString={postData.date} />
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
        <a href='/'>
                <h1>Back Home</h1>
            </a>
        </div>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
        // false时，任何未放回的路径都将导致404
        // true时
    };
}

export async function getStaticProps({params}) { //params由url传入
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}