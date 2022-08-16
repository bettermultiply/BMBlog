import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout';
export default function Firstpage() {
    return (
        <Layout>
        <div>
            <Head>
                <title>First Page</title>
            </Head>
            <h1>FirstPage</h1>
            <h2>
                <Link href="/">
                    <a>Back Home</a>
                </Link>
            </h2>
        </div>
        </Layout>
    )
}