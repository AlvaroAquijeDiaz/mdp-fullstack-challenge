import { InitialForm } from '@/ui/Home/InitialForm'
import { ShowcaseTabs } from '@/ui/Home/ShowcaseTabs/ShowcaseTabs'
import { fetcher } from '@/utils/fetcher'
import type { NextPage } from 'next'
import Head from 'next/head'
import useSWR from 'swr'

const tabsKeys = ['form', 'all users', 'data summary']

const Home: NextPage = () => {
  const { data, error } = useSWR('/api/users', fetcher)

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-1 place-content-center gap-8 px-5 py-10">
        <h1 className="text-4xl font-extrabold text-center">Dashboard</h1>
        <section>
          <InitialForm />
        </section>
        {!data && <strong>loading</strong>}

        {error && <span>error</span>}

        {data && <p className="max-w-sm text-ellipsis overflow-hidden">{JSON.stringify(data)}</p>}

        <ShowcaseTabs keys={tabsKeys} />
      </main>
    </div>
  )
}

export default Home
