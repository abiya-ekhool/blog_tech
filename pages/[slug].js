// pages/blogs/[slug].js
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  // Example: Fetch blog post data based on slug
  const blog = {
    title: 'Example Blog Post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  };

  if (!slug) {
    return null; // Handle case when slug is not yet available
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.content.substring(0, 160)} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container py-5">
        <article>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </article>
      </main>
    </div>
  );
}
