import styles from "./styles/Home.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <header className={styles.top}>
        <h1 className={styles.top_msg}>bluecode, Lifestyle developer.</h1>
      </header>
      <main>
        <section className={styles.content}>
          <h2>websiteの最新情報</h2>
          <p>最新の情報をご案内します。</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
