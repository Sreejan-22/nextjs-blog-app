import Head from "next/head";
import Layout from "../../components/layout";
import { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { userDetails: data },
  };
};

const Details = ({ userDetails }) => {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/nextjs.ico" />
        <title>User Details | {siteTitle}</title>
      </Head>
      <h1 className={utilStyles.headingLg}>User Details</h1>
      <p className={utilStyles.normalText}>{userDetails.email}</p>
      <p className={utilStyles.normalText}>{userDetails.website}</p>
      <p className={utilStyles.normalText}>{userDetails.address.city}</p>
    </Layout>
  );
};

export default Details;
