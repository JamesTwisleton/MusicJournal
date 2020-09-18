import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'

export default function Auth() {
  return (
    <Layout>
      <Head>
        <title>Login with Spotify</title>
      </Head>
      <div>
        <p>AUTH SCREEN</p>
        <Link href="/"><a>HOME TIME</a></Link>
        </div>
    </Layout>
  )
}
