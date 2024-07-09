// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
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
        <title>techplazaa</title>
        <meta name="description" content="A blog created with Next.js and Bootstrap" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container py-5">
        <div className="text-center mb-4">
          <img src="/w_logo.png" alt="Tech Plazaa Logo"  />
        </div>
        
        <div className="row justify-content-center mb-4">
          <div className="col-md-8">
            <div className="input-group input-group-lg">
              <input type="search" className="form-control border-dark" placeholder="Innovate forward . . ." aria-label="Search" />
              <button className="btn btn-dark" type="button">Search</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
