import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>disspace</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
