import Head from "next/head";
import { useRouter } from "next/router";
export default function Page() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>BunnyFied Labs</title>
      </Head>
      <main>
        <h1>We are inside the Project Folder.</h1>
        <h1>{router.query.dynamic}</h1>
      </main>
    </>
  );
}
