// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TeCH InFo</title>
        <meta name="description" content="A blog created with Next.js and Bootstrap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container py-5">
        <h1 className="text-center mb-4">Welcome to My change</h1>

        <div className="row">
          <div className="col-md-8">
            <article className="mb-5">
              <h2 className="h4">Blog Post Title</h2>
              <p className="text-muted">Posted on January 1, 2024 by Author</p>
              <p>This is a short excerpt from the blog post...</p>
              <a href="#" className="btn btn-primary">Read more</a>
            </article>
            <article className="mb-5">
              <h2 className="h4">Another Blog Post Title</h2>
              <p className="text-muted">Posted on January 2, 2024 by Author</p>
              <p>This is a short excerpt from the blog post...</p>
              <a href="#" className="btn btn-primary">Read more</a>
            </article>
            {/* Add more blog posts here */}
          </div>
          <div className="col-md-4">
            <aside>
              <div className="p-4 mb-3 bg-light rounded">
                <h4 className="font-italic">About</h4>
                <p className="mb-0">This is a short description about the blog and its purpose.</p>
              </div>
              <div className="p-4">
                <h4 className="font-italic">Archives</h4>
                <ol className="list-unstyled mb-0">
                  <li><a href="#">January 2024</a></li>
                  <li><a href="#">December 2023</a></li>
                  <li><a href="#">November 2023</a></li>
                  {/* Add more archive links here */}
                </ol>
              </div>
              <div className="p-4">
                <h4 className="font-italic">Elsewhere</h4>
                <ol className="list-unstyled">
                  <li><a href="#">GitHub</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Facebook</a></li>
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <footer className="text-center py-4">
        <p>Powered by <a href="https://vercel.com">Vercel</a></p>
      </footer>
    </div>
  );
}
