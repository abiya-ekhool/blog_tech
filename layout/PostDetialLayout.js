import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PostDetialLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>My Bootstrap App</title>
        <meta name="description" content="A simple example integrating Bootstrap 5.3 with Next.js" />
      </Head>

      <header className="bg-dark text-white p-3">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark container">
          <Link href="/" className="navbar-brand">MyApp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="container my-5">
        {children}
      </main>

      <footer className="bg-dark text-white p-3 text-center">
        <div className="container">
          &copy; {new Date().getFullYear()} My Bootstrap App. All rights reserved.
        </div>
      </footer>

      <style jsx>{`
        .chat-box {
          position: fixed;
          bottom: 0;
          right: 0;
          width: 300px;
          max-height: 400px;
          overflow-y: auto;
          background: white;
          border: 1px solid #ccc;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }

        .chat-header {
          background: #343a40;
          color: white;
          padding: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }

        .chat-body {
          padding: 10px;
        }

        .chat-input {
          width: calc(100% - 20px);
          margin: 10px;
        }
      `}</style>
    </div>
  );
};

export default PostDetialLayout;
