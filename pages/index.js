import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getSortedPostsData, getPostDir } from '../lib/posts';
import Catalogue from '../components/catalogue';
import clientPromise from "../lib/mongodb"

//gteStaticProps提供静态渲染服务
//若要使用服务器端渲染应该构建函数getServerSideProps
//仅当需要预渲染必须在请求时获取其数据的页面时才应使用
export async function getStaticProps() {
  const client = await clientPromise;
  const db = client.db("article");

  const movies = await db
      .collection("article")
      .find({})
      .toArray();

  const visit = JSON.parse(JSON.stringify(movies[0]));
  db.collection("article").updateOne({"visitor":visit.visitor}, {$set:{"visitor":visit.visitor + 1}});
  
  const allPostsData = getSortedPostsData();
  const allDir = getPostDir();
  return { 
    props: {
      allPostsData,
      allDir,
      visit,
    },
  };
}

//
export default function Home(props) {
  const {allPostsData, allDir, visit} = props;
  return (
    <main className={styles.container}>
      <Head>
        <title>BMBlog</title>
        <meta name="description" content="Generated by BetterMultiply" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <html className={styles.main}>
        <header className={styles.Header_0}>
          <div className={styles.Header_left}>
            <a href="">
              <span className={styles.Logo}>Better~Multiply</span>
            </a>
          </div>
          <div className={styles.Header_right}>
            <span><a className={styles.sp} href='#'>Latest</a></span>
            <span><a className={styles.sp} href='#'>Recommend</a></span>
            <span><a className={styles.sp} href='#'>Notes</a></span>
            <span><a className={styles.sp} href='#'>About_BM</a></span>
          </div>
        </header>
    
        <h1 className={styles.title}>
          <div>Welcome</div>
          <div><a href="#">{"It's BM' s Blog!"}</a></div>
        </h1>
        <p className={styles.description}>
          Connect with me by mailing &rarr;{' '}
          <code className={styles.code}>bettermultiply@gmail.com</code>
        </p>
        <div className={styles.Catalogue}>

          <Catalogue allDir={allDir}/>
        </div>
      </html>
      <div>you are the {visit.visitor}th visitor</div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </main>
  )
}
