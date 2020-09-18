import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Welcome to MusicJournal</title>
      </Head>
      <div>
        <p>This is the main page</p>
        <Link href="/auth/"><a>AUTH TIME</a></Link></div>
    </Layout>
  )
}