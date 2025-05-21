import React from 'react';
import styles from "./styles/Home.module.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
  <>
      <Navbar />
    <header className={styles.top}>
      <h1 className={styles.top_msg}>Toy Box</h1>
    </header>
    <main>
        <section className={styles.content}>
          <h2>websiteの最新情報</h2>
          <p>内容何を書こう？</p>
        </section>
    </main>
      <Footer />
  </>
  );
}
