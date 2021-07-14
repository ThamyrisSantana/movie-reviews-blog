import Head from "next/head";
import styles from "../styles/Home.module.css";

import Header from "../components/header/header";
import Banner from "../components/banner/banner";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Banner />
        <h1 className={styles.title}>Hello</h1>
      </main>
    </div>
  );
}
