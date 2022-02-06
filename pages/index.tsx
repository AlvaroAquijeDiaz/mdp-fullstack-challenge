import { InitialForm } from '@/ui/Home/InitialForm'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl font-extrabold">Dashboard</h1>

        <section>
          <InitialForm />
        </section>
      </main>
    </div>
  )
}

export default Home
