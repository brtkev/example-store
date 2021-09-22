import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Navegation from '../components/navegation';
import TopProducts from '../components/TopProducts';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ExampleStore</title>
        <meta name="description" content="Example Product's Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navegation />
      <TopProducts />
    </div>
  )
}
