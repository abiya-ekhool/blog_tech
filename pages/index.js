// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
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
        <title>Tech Plazaa - A Tech Blog</title>
        <meta name="description" content="Explore the latest tech trends and innovations on Tech Plazaa, a blog created with Next.js and Bootstrap." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.techplazaa.com/" />
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "Blog",
              "publisher": {
                "@type": "Organization",
                "name": "Tech Plazaa",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.techplazaa.com/logo.png",
                  "width": 600,
                  "height": 60
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.techplazaa.com/"
              }
            }
          `
        }} />
      </Head>

      <main className="container py-5">
        <div className="text-center mb-4">
          <img src="/w_logo.png" alt="Tech Plazaa Logo" />
        </div>
        
        <div className="row justify-content-center mb-4">
          <div className="col-md-8">
            <div className="input-group input-group-lg">
              <label htmlFor="searchInput" className="visually-hidden">Search</label>
              <input id="searchInput" type="search" className="form-control border-dark" placeholder="Innovate forward . . ." aria-label="Search" />
              <button className="btn btn-dark" type="button">Search</button>
            </div>
          </div>
        </div>

        <div className="row gy-4">
        {blogs.map((blog) => (
            <div key={blog.id} className="col-lg-4 col-md-6">
              <div className={`card ${styles.blogCard} border-0 shadow-sm rounded-lg`} data-aos="fade-up">
                <div className="card-body">
                <Link href={`/${blog.slug}`} passHref legacyBehavior>
  <a className="text-decoration-none">
    <h4 className="card-title mb-3">{blog.title}</h4>
  </a>
</Link>

                  <p className="card-text">{blog.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
