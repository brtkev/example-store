import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Navegation from '../components/navegation';
import TopProducts from '../components/TopProducts';

export default function Home({products}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>ExampleStore</title>
        <meta name="description" content="Example Product's Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navegation />
      <TopProducts products={products} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/store');
  const json = await res.json();
  const products = json.organic_results;
  return {
    props: {
      products
    }
  }
}