import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Text, Box, Link, Button } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Wonderers</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <Text fontSize="md" mb="50px">
            Welcome, We are
          </Text>
          <Image
            src="/logo.svg"
            alt="Next.js Logo"
            width={400}
            height={70}
            priority
          />
          <Button mt="50px" colorScheme="blue">
            Button
          </Button>

          <div>{testData[0] && testData[0].id}</div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const result = await getTestApi();
  if (result?.status !== 200) return;

  return {
    props: {
      data: result.data,
    },
  };
}
