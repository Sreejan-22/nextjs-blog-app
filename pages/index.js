import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <link rel="icon" href="/nextjs.ico" />
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
        <br />
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await res.json();

  // return {
  //   props: { allPostsData: data },
  // };
}

export default Home;
