// pages/index.js
import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/blogs.json');
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>TeCH InFo</title>
        <meta name="description" content="A blog created with Next.js and Bootstrap" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container py-5">
        <h1 className="text-center mb-4">Welcome to My Blog</h1>

        <div className="row">
          <div className="col-md-8">
            {blogs.map((blog) => (
              <article className="mb-5" key={blog.id}>
                <h2 className="h4">{blog.title}</h2>
                <p className="text-muted">Posted on {blog.date} by {blog.author}</p>
                <p>{blog.excerpt}</p>
                <a href={blog.link} className="btn btn-primary">Read more</a>
              </article>
            ))}
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
                  <li><a href="https://github.com">GitHub</a></li>
                  <li><a href="https://twitter.com">Twitter</a></li>
                  <li><a href="https://facebook.com">Facebook</a></li>
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
