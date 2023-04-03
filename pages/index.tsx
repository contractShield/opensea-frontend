import type { NextPage } from 'next';
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Banner, TopHeader } from '@/components'

const Home: NexPage = () => {
  return (
    <div className='{styles.container'>
      <TopHeader />
      <Banner />
    </div>
  );
}

export default Home;