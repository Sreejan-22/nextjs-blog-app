import Head from "next/head";
import { siteTitle } from "../components/layout";

export default function About() {
  return (
    <div className="text-center mt-4">
      <Head>
        <link rel="icon" href="/nextjs.ico" />
        <title>About | {siteTitle}</title>
      </Head>
      <h1 className="text-3xl font-bold underline mb-4">Hello world!</h1>
      <h1 className="text-xl">This is the About page</h1>
      <h1 className="text-xl">This page has been styled using Tailwind</h1>
    </div>
  );
}
