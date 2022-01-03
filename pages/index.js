import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
// import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  // const allPostsData = getSortedPostsData();
  // return {
  //   props: {
  //     allPostsData,
  //   },
  // };
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { users: data },
  };
}

function Home({ users }) {
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
        <h2 className={utilStyles.headingLg}>Links</h2>
        <Link href="/about">
          <a>About Page</a>
        </Link>
        <br />
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Users</h2>
        <ul className={utilStyles.list}>
          {users.map(({ id, name }) => (
            <div key={id}>
              <Link
                href={`/users/${id}`}
                className={utilStyles.listItem}
                // key={id}
              >
                {name}
              </Link>
              <br />
            </div>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export default Home;
