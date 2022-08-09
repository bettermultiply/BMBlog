import Head from 'next/head';
import Link from 'next/link';

export default function SecnodPage() {
    return (
        <div className="a_container">
          <Head>
            <title>BMBlog</title>
            <link rel="icon" href="/favicon.ico" /> //自动寻找路径
            <link rel="stylesheet" type="text/css" href="/i.css" />
          </Head>
          <main>
            <header className="a_Header_0">

              <div className='a_Header_left'>
              <a href="/">
                <span className="Logo">Better</span>
                <span className="Logo">~</span>
                <span className="Logo">Multiply</span>
              </a>
              </div>

              <div className='Header_right'>
                  <span><a className='sp' href='#'>Latest</a></span>
                  <span><a className='sp' href='#'>Recommend</a></span>
                  <span><a className='sp' href='#'>Notes</a></span>
                  <span><a className='sp' href='#'>About_BM</a></span>
              </div>
              
            </header>
          <div className='Main_0'>
            <h1 className="title">
            <div>Welcome!{' '}</div>
            <div>
            <Link href="/posts/first-post">
              <a>It's BM's Blog!</a>
            </Link>  
            <p className="description">
              <a href="/posts/first-post">Get started</a> by editing <code>pages/index.js</code>
            </p>
            </div>
            </h1>
    
            
    
            <div className="grid">
              <a href="https://nextjs.org/docs" className="card">
                <h3>Documentation &rarr;</h3>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>
    
              <a href="https://nextjs.org/learn" className="card">
                <h3>Learn &rarr;</h3>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
              </a>
    
              <a
                href="https://github.com/vercel/next.js/tree/master/examples"
                className="card"
              >
                <h3>Examples &rarr;</h3>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </a>
    
              <a
                href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className="card"
              >
                <h3>Deploy &rarr;</h3>
                <p>
                  Instantly deploy your Next.js site to a public URL with Vercel.
                </p>
              </a>
            </div>
          </div>
          </main>
    
          <footer>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <img src="/vercel.svg" alt="Vercel" className="logo" />
            </a>
          </footer>
        </div>
      )
}