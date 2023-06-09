import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getTestApi, postTestApi } from "@/domain/test/test.service";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  data: any[];
}

export default function Home({ data }: Props) {
  const [testData, setTestData] = useState<any>([]);

  const postTest = async () => {
    const result = await postTestApi({
      id: "1234",
      name: "lee",
      country: "ko",
      lang: "react",
    });
    setTestData(result?.data);
  };

  useEffect(() => {
    setTestData(data);
  }, []);

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
            className={styles.logo}
            src="/logo.svg"
            alt="Next.js Logo"
            width={400}
            height={70}
            priority
          />
          <Button mt="50px" colorScheme="blue" onClick={postTest}>
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
