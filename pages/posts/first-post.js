import Link from "next/link";
import Head from "next/head";
import { Layout } from "../../components";
const firstpost = () => {
  return (
    <Layout>
      <Head>
        <title>Halaman Kedua</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to Previous</Link>
      </h2>
    </Layout>
  );
};

export default firstpost;
