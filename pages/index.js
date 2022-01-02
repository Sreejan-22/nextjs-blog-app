import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi! I am Sreejan. I am a frontend developer</p>
        <p>
          (This is a sample website - you'll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <br />
        <h1>Links</h1>
        <Link href="/posts/first-post">
          <a>First Post</a>
        </Link>
        &nbsp;&nbsp;
        <Link href="/about">
          <a>About Page</a>
        </Link>
      </section>
    </Layout>
  );
}
